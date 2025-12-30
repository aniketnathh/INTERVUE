import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();

// Middlewares
app.use(express.json());

// CORS: allow localhost + current Vercel frontend
const allowedOrigins = [
  "http://localhost:5173",
  ENV.CLIENT_URL // make sure this is updated to your new frontend URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Clerk authentication middleware
app.use(clerkMiddleware());

// Inngest endpoint
app.use("/api/inngest", serve({ client: inngest, functions }));

// API routes
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "API is healthy" });
});

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server running on port:", ENV.PORT);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
