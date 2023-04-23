import React, { useState, useEffect } from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
import eventsService from '../services/eventsService';

const ShowHidden = ({ getData }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  console.log(events);
};

export default ShowHidden;
