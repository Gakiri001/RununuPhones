import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const validateInfo = async (req, res, next) => {
  const { name, email, subject, explanation } = req.body;
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "The Name is required" });
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "The Email is required" });
  if (!subject)
    return res
      .status(400)
      .json({ success: false, message: "The Subject is required" });
  if (!explanation)
    return res
      .status(400)
      .json({ success: false, message: "Explanation is required" });
  next();
};
