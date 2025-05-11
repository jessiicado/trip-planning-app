// const mongoose = require('mongoose');

// const rideSchema = new mongoose.Schema({
//     typeOfTransport: {
//         type: String,
//         required: true,
//         enum: ['Car', 'Bus', 'Train', 'Plane'],
//     },

// },
// {
//     timestamps: true,
// }
// );

// const carSchema = new mongoose.Schema({
//     numOfSedans: {
//         type: Number,
//         required: true,
//         min: 0,
//         default: 0,
//     },
//     numOfSUV: {
//         type: Number,
//         required: true,
//         min: 0,
//         default: 0,
//     },

// },
// {
//     timestamps: true,
// }
// );

// const otherSchema = new mongoose.Schema({
//     numOfPassengers: {
//         type: Number,
//         required: true,
//         min: 0,
//         default: 0,
//     },
//     departureTime: {
//         type: Date,
//         required: true,
//     },

// },
// {
//     timestamps: true,
// }
// );

// module.exports = mongoose.model('Ride', rideSchema);
