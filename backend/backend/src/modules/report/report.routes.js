import express from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { getMonthlyReport } from "./report.controller.js";

const router = express.Router();

router.get("/monthly", authenticate, getMonthlyReport);

export default router;