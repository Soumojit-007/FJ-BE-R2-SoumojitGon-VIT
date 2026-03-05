import express from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { createOrUpdate, getStatus } from "./budget.controller.js";

const router = express.Router();

router.post("/", authenticate, createOrUpdate);
router.get("/status", authenticate, getStatus);

export default router;