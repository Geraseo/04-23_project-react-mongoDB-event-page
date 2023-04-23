require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();
app.use(express.json());

// constrollers
const { getEvents, setEvent, updateEvent, deleteEvent, getEventById } = require('./controllers/EventController');
//_____________________

app.post('/api/events', setEvent);
app.get('/api/events', getEvents);
app.put('/api/events/:id', updateEvent);
app.delete('/api/events/:id', deleteEvent);
app.get('/api/events/:id', getEventById);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
