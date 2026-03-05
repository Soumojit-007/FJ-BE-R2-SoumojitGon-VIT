import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { apiLimiter } from "./middlewares/rateLimiter.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { ERROR_MESSAGES } from "./constants/index.js";

// Routes
import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import categoryRoutes from "./modules/category/category.routes.js";
import transactionRoutes from "./modules/transaction/transaction.routes.js";
import budgetRoutes from "./modules/budget/budget.routes.js";
import reportRoutes from "./modules/report/report.routes.js";
import receiptRoutes from "./modules/receipt/receipt.routes.js";
import bankRoutes from "./modules/bankImport/bank.routes.js";
import aiRoutes from "./modules/ai/ai.routes.js";

const app = express();

// Core Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api", apiLimiter);

// Health Check
app.get("/", (req, res) => {
  res.json({ message: "Finance Tracker API Running 🚀" });
});

// Route Registration
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/receipts", receiptRoutes);
app.use("/api/bank", bankRoutes);
app.use("/api/ai", aiRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: ERROR_MESSAGES.NOT_FOUND });
});

// Global Error Handler
app.use(errorHandler);

export default app;