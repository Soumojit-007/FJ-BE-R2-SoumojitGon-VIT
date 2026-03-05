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

/* -------------------- CORE MIDDLEWARES -------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(helmet());
app.use(morgan("dev"));

/* -------------------- HEALTH CHECK -------------------- */

app.get("/", (req, res) => {
  res.json({ message: "Finance Tracker API Running 🚀" });
});

/* -------------------- AUTH ROUTES (NO RATE LIMIT) -------------------- */

app.use("/api/auth", authRoutes);

/* -------------------- PROTECTED ROUTES (WITH RATE LIMIT) -------------------- */

app.use("/api/users", apiLimiter, userRoutes);
app.use("/api/categories", apiLimiter, categoryRoutes);
app.use("/api/transactions", apiLimiter, transactionRoutes);
app.use("/api/budgets", apiLimiter, budgetRoutes);
app.use("/api/reports", apiLimiter, reportRoutes);
app.use("/api/receipts", apiLimiter, receiptRoutes);
app.use("/api/bank", apiLimiter, bankRoutes);
app.use("/api/ai", apiLimiter, aiRoutes);

/* -------------------- 404 HANDLER -------------------- */

app.use((req, res) => {
  res.status(404).json({ error: ERROR_MESSAGES.NOT_FOUND });
});

/* -------------------- GLOBAL ERROR HANDLER -------------------- */

app.use(errorHandler);

export default app;