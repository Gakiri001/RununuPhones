import { Router } from "express";
import { createUser,loginUser } from "../controllers/users.controllers.js";

import { deleteUser,getUsers } from "../controllers/users.controllers.js";

const router = Router();

router.post("/register", createUser);

router.post("/login", loginUser)

router.get("/register", getUsers);

router.delete("/register/:id", deleteUser)

export default router;
