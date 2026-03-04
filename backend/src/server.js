import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import prisma from "./config/db.js";
import { SUCCESS_MESSAGES } from "./constants/index.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully ✅");

    app.listen(PORT, () => {
      console.log(`${SUCCESS_MESSAGES.SERVER_STARTED} 🚀`);
      console.log(`Running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();