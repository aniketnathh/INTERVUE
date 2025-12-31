import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());

// Inngest + API routes
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "API is up and running" });
});

/**
 * Local dev server
 * Only start server locally
 */
if (process.env.NODE_ENV !== "production") {
  const startServer = async () => {
    try {
      await connectDB();
      app.listen(ENV.PORT, () =>
        console.log("Server is running on port:", ENV.PORT)
      );
    } catch (error) {
      console.error("💥 Error starting the server", error);
    }
  };
  startServer();
}

/**
 * Vercel serverless handler
 */
export default async function handler(req, res) {
  await connectDB(); // ensures DB is connected on each invocation
  return app(req, res);
}
