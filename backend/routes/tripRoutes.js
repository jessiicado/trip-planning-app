//tripRoutes.js
const express = require("express");
const router = express.Router();

const {
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/tripController");

// @route GET all /api/trips
router.get("/", getTrip);
// @route POST /api/trips
router.post("/", createTrip);
// @route PUT /api/trips/:id
router.put("/:id", updateTrip);
// @route DELETE /api/trips/:id
router.delete("/delete:id", deleteTrip);

module.exports = router;
