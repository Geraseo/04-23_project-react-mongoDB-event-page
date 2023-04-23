const Event = require('../models/Event');
const asyncHandler = require('express-async-handler');

//_____________________
// @desc get events
// @route GET /api/events
// @access Public

const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({
    hidden: false,
  });
  res.status(200).json(events);
});

//_____________________
//@desc set events
//@route set /api/events
//@access Public

const setEvent = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please fill all fields');
  }
  const event = await Event.create({
    title: req.body.title,
    description: req.body.description,
    photo: req.body.photo,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    hidden: req.body.hidden,
  });
  res.status(200).json(event);
});
//_____________________
// @desc update events
// @route PUT /api/events/:id
// @access Public

const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    event.title = req.body.title || event.title;
    event.description = req.body.description || event.description;
    event.photo = req.body.photo || event.photo;
    event.startDate = req.body.startDate || event.startDate;
    event.endDate = req.body.endDate || event.endDate;
    event.hidden = req.body.hidden || event.hidden;
    const updatedEvent = await event.save();
    res.status(200).json(updatedEvent);
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});

//_____________________
// @desc delete events
// @route DELETE /api/events/:id
// @access Public

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    await event.deleteOne();
    res.status(200).json({ message: 'Event removed' });
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});
//_____________________
// @desc getEventById
// @route GET /api/events/:id
// @access Public

const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});
//_____________________

module.exports = {
  getEvents,
  setEvent,
  updateEvent,
  deleteEvent,
  getEventById,
};
