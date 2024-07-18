import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPhone = async (req, res) => {
  try {
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

    const phone = await prisma.phonedetails.create({
      data: {
        phoneImage: phoneImage,
        phoneName: phoneName,
        resolution: resolution,
        processor: processor,
        ram: ram,
        storage: storage,
        connectivity: connectivity,
        battery: battery,
      },
      select: {
        id: true,
        phoneImage: true,
        phoneName: true,
        resolution: true,
        processor: true,
        ram: true,
        storage: true,
        connectivity: true,
        battery: true,
      },
    });
    res.status(201).json(phone);
  } catch (err) {
    res.status(500).json({ success: true, message: "server Failed" });
  }
};
