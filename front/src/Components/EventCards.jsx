import React, { useState, useEffect } from 'react';
import eventsService from '../services/eventsService';
import NewEventForm from './NewEventForm';

import './EventCards.css';

import { Card, Button } from 'react-bootstrap';
import ShowHidden from './ShowHidden';

const EventCards = () => {
  const [events, setEvents] = useState([]);

  const getData = () => {
    eventsService.getEvents().then((res) => {
      setEvents([...res.data]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(events);

  return (
    <div className="container">
      {/* new event form  */}
      <NewEventForm getData={getData} />
      <ShowHidden getData={getData} />

      {/* random text and logo */}
      <div className="row w-100 text-center">
        <div className="col-12">
          <h1>All Events</h1>
        </div>
      </div>

      {/* cards */}
      <div className="row">
        {events.map((event) => {
          return (
            <div
              key={event._id}
              className="singleCard col-4"
            >
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={event.photo}
                />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="w-100">
                    <Button
                      className="w-100"
                      variant="primary"
                    >
                      More
                    </Button>

                    {/* event id little text */}
                    <small className="text-muted w-100">Event ID: {event._id}</small>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCards;
