// server.js
import express from "express";
// import cors from "cors";
import tripRoutes from "./routes/trips.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5050;
const app = express();

// app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/trips", tripRoutes);

//start express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
