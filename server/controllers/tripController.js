import mongoose from "mongoose";
import Trip from "../models/Trip.js";

export const getTrips = async (req, res) => {
  try {
    const userId = req.userId;
    const trips = await Trip.find({ user: userId });
    res.status(200).json({ success: true, data: trips });
  } catch (error) {
    console.log("error in fetching trips.", error.message);
    res.status(500).json({
      success: false,
      message: "Server error: Error in fetching trips.",
    });
  }
};

export const createTrip = async (req, res) => {
  const userId = req.userId;
  const { name, destination, startDate, endDate } = req.body;

  if (!name || !destination || !startDate || !endDate) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide trip details" });
  }

  const newTrip = new Trip({
    user: userId,
    name,
    destination,
    startDate,
    endDate,
  });

  try {
    await newTrip.save();
    res.status(201).json({ success: true, data: newTrip });
  } catch (error) {
    console.error("Error in creating a trip:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error: Error in creating a trip.",
    });
  }
};

export const updateTrip = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  const { name, destination, startDate, endDate } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Trip ID" });
  }

  const trip = await Trip.findOne({ _id: id, user: userId });

  if (!trip) {
    return res.status(403).json({ success: false, message: "Trip not found" });
  }

  try {
    const updatedTrip = await Trip.findByIdAndUpdate(
      id,
      { name, destination, startDate, endDate },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedTrip });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error: Error in updating trip",
    });
  }
};

export const deleteTrip = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Trip ID" });
  }

  const trip = await Trip.findOne({ _id: id, user: userId });

  if (!trip) {
    return res.status(403).json({ success: false, message: "Trip not found" });
  }

  try {
    await Trip.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Trip successfully deleted" });
  } catch (error) {
    console.error("Error in deleting trip:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error: Error in deleting trip",
    });
  }
};
