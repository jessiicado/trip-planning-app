// backend/controllers/tripController.js
// controllers/tripController.js
const Trip = require("../models/Trip");

// Create a trip
const createTrip = async (req, res) => {
  const { title, completed } = req.body;
  const trip = new Trip({
    title,
    completed,
  });

  try {
    const savedTrip = await trip.save();
    res.status(201).json(savedTrip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all trips
const getTrip = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a trip
const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updatedTrip = await Trip.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    res.json(updatedTrip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a trip
const deleteTrip = async (req, res) => {
  const { id } = req.params;

  try {
    await Trip.findByIdAndDelete(id);
    res.json({ message: "Trip deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
};
