const mongoose = require('mongoose');

const EventCard = mongoose.model(
  'EventCard',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  }),
);

module.exports = EventCard;
