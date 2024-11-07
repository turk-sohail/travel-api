const mongoose = require("mongoose");
const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
  },

  duration: {
    type: Number,
    required: [true, "Duration is required"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "Tour must have group"],
  },
  difficulty: {
    type: String,
    required: [true, "Tour difficulty is not provided"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, "tour must have descirption"],
  },
  description: {
    type: String,
  },
  imageCover: {
    type: String,
    required: [true, "please provide cover image"],
  },
  imges: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model("Tour", TourSchema);
module.exports = Tour;
//
