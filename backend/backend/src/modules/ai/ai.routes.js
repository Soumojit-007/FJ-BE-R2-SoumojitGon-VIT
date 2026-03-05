import express from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { getAISummary } from "./ai.controller.js";

const router = express.Router();
router.get("/summary" , authenticate , getAISummary);
export default router;