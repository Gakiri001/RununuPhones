import { Router } from "express";
import { createPhone } from "../controllers/phone.controllers.js";

const router = Router();

router.post("/register", createPhone);

export default router;
