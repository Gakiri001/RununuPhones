import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { json } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNumber, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await prisma.usersign.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phoneNumber: phoneNumber,
        password: hashedPassword,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        phoneNumber: true,
        password: true,
      },
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.usersign.findFirst({
      where: { email: email },
    });
    if (user) {
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (passwordMatch === true) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "10m",
        });
        res.cookie("Beba_access_token", token, {
          httpOnly: true,
        });
        res.status(200).json({ success: true, data: payload });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Wrong Login credentials" });
      }
    } else {
      res
        .status(400)
        .json({ success: false, message: "Wrong Login credentials" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.usersign.findMany();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const delectUserInfo = await prisma.usersign.delete({
      where: { id: id },
      select: {
        firstname: true,
        lastname: true,
        email: true,
        phoneNumber: true,
        password: true,
        id: true,
      },
    });
    res.status(200).json(delectUserInfo);
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};
