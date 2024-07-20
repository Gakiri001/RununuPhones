import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { json } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, explanation } = req.body;

    const lessee = await prisma.contactSubject.create({
      data: {
        name: name,
        email: email,
        subject: subject,
        explanation: explanation,
      },
      select: {
        id: true,
        name: true,
        email: true,
        subject: true,
        explanation: true,
      },
    });
    res.status(201).json({ success: true, message: "Response Successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Failed" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await prisma.contactSubject.findMany();
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};

export const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, subject, explanation } = req.body;
  try {
    const contact = await prisma.contactSubject.update({
      where: { id: parseInt(id, 10) },
      data: { name, email, subject, explanation },
    });
    res
      .status(200)
      .json({
        success: true,
        message: "Contact updated successfully",
        contact,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};

export const deleteContact = async (req, res) => {
  const id = req.params.id;
  try {
    const delectSubject = await prisma.contactSubject.delete({
      where: { id: id },
      select: {
        name: true,
        email: true,
        subject: true,
        explanation: true,
        id: true,
      },
    });
    res.status(200).json(delectSubject);
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};
