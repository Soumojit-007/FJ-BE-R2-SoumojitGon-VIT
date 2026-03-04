import express from "express";
import upload from "../../config/multer.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { uploadReceipt, fetchReceipt } from "./receipt.controller.js";

const router = express.Router();

router.post(
  "/upload",
  authenticate,
  upload.single("receipt"),
  uploadReceipt
);

router.get("/:transactionId", authenticate, fetchReceipt);

export default router;