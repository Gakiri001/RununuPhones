import { Router } from "express";
import { createContact } from "../controllers/Contact.controllers.js";
import { validateInfo } from "../middleware/contact.middleware.js";
// import { isAdmin } from "../middleware/admin.middleware.js";
import {
  getContacts,
  updateContact,
  deleteContact,
} from "../controllers/Contact.controllers.js";

const router = Router();

router.post("/contact", validateInfo, createContact);

router.get("/contact", getContacts);

router.put("/contact/:id", validateInfo, updateContact);

router.delete("/contact/:id", deleteContact);

export default router;
