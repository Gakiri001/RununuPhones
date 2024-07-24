import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createorder =  async (req, res) => {
  try{
    const{
      pickup,
      deliveryDate,
    } = req.body;

    const order = await prisma.orderData.create({
      data: {
        pickup: pickup,
        deliveryDate: new Date (deliveryDate),
      },
      select: {
        id: true,
        pickup: true,
        deliveryDate: true,
      },
    });
    res.status(201).json({success: true, message:"Order sent"})
  }
  catch(err){
    res.status(500).json({success:false, message:"server Failed"})
  }
}