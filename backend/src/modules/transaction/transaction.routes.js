import express from "express";
import { create, getAll, remove } from "./transaction.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { transactionSchema } from "./transaction.validation.js";

const router = express.Router();

router.post("/", authenticate, validate(transactionSchema), create);
router.get("/", authenticate, getAll);
router.delete("/:id", authenticate, remove);

export default router;