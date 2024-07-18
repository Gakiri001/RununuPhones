import { Router } from "express";
import { createPhone } from "../controllers/phone.controllers.js";
import { validatephone } from "../middleware/phone.middleware.js";

const router = Router();

router.post("/register",validatephone, createPhone);

export default router;
