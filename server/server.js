// server.js
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
// import cors from "cors";
import tripRoutes from "./routes/trips.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

// app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);

//start express server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
