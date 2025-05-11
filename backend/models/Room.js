const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    numOfRooms: {
      type: Number,
      required: true,
      min: [1, "At least one room is required"],
    },
    numOfBeds: {
      type: Number,
      required: true,
      min: [1, "At least one bed is required"],
    },
    numOfAdults: {
      type: Number,
      required: true,
      min: [1, "At least one adult is required"],
    },
    numOfChildren: {
      type: Number,
      required: true,
      min: [0, "Number of children cannot be negative"],
      default: 0, // Default to 0 if not specified
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.checkInDate;
        },
        message: "Check-out date must be after check-in date",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
