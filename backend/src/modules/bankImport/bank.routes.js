import express from "express";
import upload from "../../config/multer.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { importCSV } from "./bank.controller.js";

const router = express.Router();

router.post(
  "/upload",
  authenticate,
  upload.single("file"),
  importCSV
);

export default router;