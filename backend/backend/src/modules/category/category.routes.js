import express from "express";
import {
  create,
  getAll,
  remove,
} from "./category.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, create);
router.get("/", authenticate, getAll);
router.delete("/:id", authenticate, remove);

export default router;