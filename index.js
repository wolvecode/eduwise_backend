require("dotenv-safe").config()
const express = require("express");
const app = express();
const connectDb = require("./utils/connectDb");
const cors = require("cors");
const routeNotFound = require("./middleware/notFound");
const mongoose = require("mongoose");
const authRouter = require("./route/userRoute");
const courseRoute = require('./route/courseRoute')

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api", authRouter); 
app.use("/api", courseRoute); 


app.get("/health", (req, res) => res.status(200).send("OK"));

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    await connectDb(process.env.MONGO_URI); // Connecting to MongoDB

    app.use(routeNotFound);

    const server = app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });

    const shutdown = (signal) => {
      console.log(`Received ${signal}. Shutting down...`);
      server.close(() => {
        console.log("Server closed. Exiting process.");
        mongoose.connection.close();
        process.exit(0);
      });
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
