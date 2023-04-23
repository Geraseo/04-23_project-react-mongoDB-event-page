import axios from 'axios';

const API_URL = 'http://localhost:3000/api/events';

//_____________________
// get events
const getEvents = async () => {
  try {
    const res = await axios.get(API_URL);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//_____________________
// post events
const setEvent = async (event) => {
  try {
    const res = await axios.post(API_URL, event);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//_____________________
// update events
const updateEvent = async (id, event) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, event);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//_____________________
// delete events
const deleteEvent = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//_____________________
// get event by id
const getEventById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const eventsService = { getEvents, setEvent, updateEvent, deleteEvent, getEventById };
export default eventsService;
