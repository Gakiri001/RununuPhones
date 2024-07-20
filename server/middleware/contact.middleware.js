import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const validateInfo = async (req,res,next) => {
  const {name, email, subject, explanation } = req.body
  if(!name)
    return res.status(400).json({success:false, message:"name Date is required"})
  if(!email)
    return res.status(400).json({success:false, message:"email Date is required"})
  if(!subject)
    return res.status(400).json({success:false, message:"subject is required"})
  if(!explanation)
    return res.status(400).json({success:false, message:"explanation is required"})
  next()
}