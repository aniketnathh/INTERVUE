import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();

//middlewares
app.use(express.json());

// credentials:true meaning?? => server allows a browser to include cookies on request
const allowedOrigins = [
  "http://localhost:5173",
  "https://intervue-orpin.vercel.app",
  "https://intervue-atkjs6h5y-anikets-projects-e791da45.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) callback(null, true);
      else callback(null, false);
    },
    credentials: true,
  })
);


// this adds authentication to req object
app.use(clerkMiddleware());

//inngest endpoint
app.use("/api/inngest", serve({ client: inngest, functions }));

//get chat token api
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

const __dirname = path.resolve();


app.get("/", (req, res) => {
  res.status(200).json({ msg: "Backend is running" });
});



const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server is running on port:", ENV.PORT);
    });
  } catch (error) {
    console.error("error starting server", error);
  }
};

startServer();
