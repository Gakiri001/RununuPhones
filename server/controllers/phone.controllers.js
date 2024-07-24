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
      price,
    } = req.body;

    const phone = await prisma.phonedetail.create({
      data: {
        phoneImage: phoneImage,
        phoneName: phoneName,
        resolution: resolution,
        processor: processor,
        ram: ram,
        storage: storage,
        connectivity: connectivity,
        battery: battery,
        price: price,
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
        price: true,
      },
    });
    res.status(201).json({ success: true, message: "response successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "server Failed" });
  }
};

export const getPhone = async (req, res) => {
  try {
    const phoneDetail = await prisma.phonedetail.findMany();
    res.status(200).json({ success: true, phoneDetail });
  } catch (err) {
    res.status(500).json({ success: false, message: "An error occured" });
  }
};

export const deletePhone = async (req, res) => {
  const id = req.params.id;
  try {
    const deletePhoneInfo = await prisma.phonedetail.delete({
      where: { id: id },
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
        price: true,
      },
    });
    res.status(200).json({ success: true, message: "Phone deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "An error occured" });
  }
};

export const updatephone = async (req, res) => {
  const {
    phoneImage,
    phoneName,
    resolution,
    processor,
    ram,
    storage,
    connectivity,
    battery,
    price,
  } = req.body;
  const id = req.params.id;
  try {
    let updatephoneInfo;
    if (phoneImage) {
      updatephoneInfo = await prisma.phonedetail.update({
        where: { id: id },
        data: { phoneImage: phoneImage },
      });
    }
    if (phoneName) {
      updatephoneInfo = await prisma.phonedetail.update({
        where: { id: id },
        data: { phoneName: phoneName },
      });
    }
    if (resolution) {
      updatephoneInfo = await prisma.phonedetail.update({
        where: { id: id },
        data: { resolution: resolution },
      });
    }
    if (processor) {
      updatephoneInfo = await prisma.phonedetail.update({
        where: { id: id },
        data: { processor: processor },
      });
    }
    if (ram) {
      updatephoneInfo = await prisma.phonedetail.update({
        where: { id: id },
        data: { ram: ram },
      });
    }
    if (storage) {
      updatephoneInfo = await prisma.phonedetail.update({
        where: { id: id },
        data: { storage: storage },
      });
    }
    if (connectivity) {
      updatephoneInfo = await prisma.phonedetail.update({
        where: { id: id },
        data: { connectivity: connectivity },
      });
    }
    if (battery) {
      updatephoneInfo = await prisma.phonedetail.update({
        where: { id: id },
        data: { battery: battery },
      });
    }
    if (price) {
      updatephoneInfo = await prisma.phonedetail.update({
        where: { id: id },
        data: { battery: price },
      });
    }
    res.status(200).json({ success: true, message: "Phone update done" });
  } catch (err) {
    res.status(500).json({ success: false, message: "An error occured" });
  }
};

// if (!isInCart(current.id)) {
//   addToCart(current);
//   console.log(current.id)
//   alert("Successfully Added to Cart");
// } else {
//   alert("Already Added to the Cart");
// }
