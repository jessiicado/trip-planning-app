import mongoose from "mongoose";
import Trip from "../models/Trip.js";

export const getTrips = async (req, res) => {
  try {
    const trip = await Trip.find({});
    res.status(200).json({ success: true, data: trips });
  } catch (error) {
    console.log("error in fetching trips.", error.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Server error: Error in fetching trips.",
      });
  }
};

export const createTrip = async (req, res) => {
  const trip = req.body;

  if (!trip.name || !trip.destination || !trip.startDate || !trip.endDate) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide trip details" });
  }

  const newTrip = new Trip(trip);

  try {
    await newTrip.save();
    res.status(201).json({ success: true, data: newTrip });
  } catch (error) {
    console.error("Error in creating a trip:", error.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Server error: Error in creating a trip.",
      });
  }
};

export const updateTrip = async (req, res) => {
  const { id } = req.params;

  const trip = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Trip ID" });
  }

  try {
    const updatedTrip = await Trip.findByIdAndUpdate(id, trip, { new: true });
    res.status(200).json({ success: true, data: updatedTrip });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Server error: Error in updating trip",
      });
  }
};

export const deleteTrip = async (req, res) => {
  const { id } = req.params;

  try {
    await Trip.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (error) {
    console.log("Error in deleting trip:", error.message);
    res
      .status(404)
      .json({
        success: false,
        message: "Server error: Error in deleting trip",
      });
  }
};
