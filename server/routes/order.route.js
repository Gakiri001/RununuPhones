import express from "express";
import {
  createorder,
  getOrder,
  deleteorder,
} from "../controllers/order.controllers.js";
const router = express.Router();

router.post("/order", createorder);
router.get("/order", getOrder);
router.delete("/order/:id", deleteorder);

export default router;
