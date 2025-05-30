import express from "express";

import {
  createTrip,
  deleteTrip,
  getTrips,
  updateTrip,
} from "../controllers/trip_controller.js";

const router = express.Router();

// GET /api/trips - List all trips
router.get("/", getTrips);

// POST /api/trips - Create a new trip
router.post("/", createTrip);

// PUT /api/trips/:id - Update a trip
router.put("/:id", updateTrip);

// DELETE /api/trips/:id - Delete a trip
router.delete("/:id", deleteTrip);

export default router;
