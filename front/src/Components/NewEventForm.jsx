import React, { useState } from 'react';
import { Form, Button, Collapse } from 'react-bootstrap';
import eventsService from '../services/eventsService';

import './NewEventForm.css';

const NewEvent = ({ getData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [date, setDate] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [hidden, setHidden] = useState('');

  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      title,
      description,
      photo,
      date,
      startDate,
      endDate,
      hidden: hidden === 'true' ? true : false,
    };

    eventsService.setEvent(newEvent);

    setTitle('');
    setDescription('');
    setPhoto('');
    setDate('');
    setstartDate('');
    setendDate('');
    setHidden('false');

    getData();
  };

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="openFormBtn m-2"
      >
        Add New Event
      </Button>

      <Collapse in={open}>
        <div className="newEvent">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter photo URL adress"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter start date"
                value={startDate}
                onChange={(e) => setstartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter end date"
                value={endDate}
                onChange={(e) => setendDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Hidden"
                value={true}
                onChange={(e) => setHidden(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </Collapse>
    </>
  );
};

export default NewEvent;
