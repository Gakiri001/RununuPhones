import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createorder = async (req, res) => {
  try {
    const { pickup, deliveryDate } = req.body;

    const order = await prisma.orderData.create({
      data: {
        pickup: pickup,
        deliveryDate: new Date(deliveryDate),
      },
      select: {
        id: true,
        pickup: true,
        deliveryDate: true,
      },
    });
    res.status(201).json({ success: true, message: "Order sent" });
  } catch (err) {
    res.status(500).json({ success: false, message: "server Failed" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const orders = await prisma.orderData.findMany();
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: "An error occured" });
  }
};

export const deleteorder = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteorderInfo = await prisma.orderData.delete({
      where: { id: id },
      select: {
        id: true,
        pickup: true,
        deliveryDate: true,
      },
    });
    res.status(200).json(deleteorderInfo);
  } catch (err) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};
