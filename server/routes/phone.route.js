import { Router } from "express";
import { createPhone,getPhone, deletePhone,updatephone} from "../controllers/phone.controllers.js";
import { validatephone } from "../middleware/phone.middleware.js";

const router = Router();

router.post("/register",validatephone, createPhone);

router.get("/register", getPhone)

router.delete("/register/:id", deletePhone)

router.put("/register/:id", updatephone)

export default router;
