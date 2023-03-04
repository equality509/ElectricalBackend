import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import router from "./controllers/projects.js";
import express from "express";
// Get env variables
dotenv.config();

// Create express app
const app = express();

process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
  });

// Register middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes and routers
app.get("/", (req, res) => {
    res.json({message: "gotcha!"})
})

// Router
app.use("/student", router);

// Listener
const PORT = process.env.PORT ?? 4001;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));