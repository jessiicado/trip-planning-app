import express from "express";
import auth from "../config/auth.js";
import {
  createTrip,
  deleteTrip,
  getTrips,
  updateTrip,
} from "../controllers/tripController.js";

const router = express.Router();

// GET /api/trips - List all trips
router.get("/", auth, getTrips);

// POST /api/trips - Create a new trip
router.post("/", auth, createTrip);

// PUT /api/trips/:id - Update a trip
router.put("/:id", updateTrip);

// DELETE /api/trips/:id - Delete a trip
router.delete("/:id", deleteTrip);

export default router;
