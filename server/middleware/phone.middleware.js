import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

export const validatephone = async (req,res,next) => {
  const {
    phoneImage,
    phoneName,
    resolution,
    processor,
    ram,
    storage,
    connectivity,
    battery,
  } = req.body;

  //check if all the required fields are provided
  if(!phoneImage) 
    return res.status(400).json({success:false, message:"Phone Image is required"})
  if(!phoneName) 
    return res.status(400).json({success:false, message:"Phone Name is required"})
  if(!resolution) 
    return res.status(400).json({success:false, message:"Resolution is required"})
  if(!processor) 
    return res.status(400).json({success:false, message:"Processor is required"})
  if(!ram) 
    return res.status(400).json({success:false, message:"RAM is required"})
  if(!storage) 
    return res.status(400).json({success:false, message:"Storage is required"})
  if(!connectivity) 
    return res.status(400).json({success:false, message:"Phone connectivity is required"})
  if(!battery) 
    return res.status(400).json({success:false, message:"Battery life is required"})

  next();
}