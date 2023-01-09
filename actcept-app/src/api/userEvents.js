const express = require('express');
const { createEvent, getEventById } = require('./utils');

let userEvents = [{
    "event_id": 0,
    "venue_id": "bahama",
    "venue_name": "bahama",
    "artist_name": "bahama",
    "artist_email": "bahama",
    "event_name": "bahama",
    "event_date": "bahama",
    "event_description": "bahama",
    "genre": "bahama",
    "image_url": "bahama",
    "event_confirmation": "bahama"
  }];

userEventsRouter = express.Router();

//Get all Events
userEventsRouter.get('', (req, res, next) => {
    res.status(200).send(userEvents)
})

// Get a single Event
userEventsRouter.get('/:event_id', (req, res, next) => {
    const foundEvent = getEventById(req.params.event_id, userEvents);
    console.log(userEvents)
    if (foundEvent){
        res.status(200).send(foundEvent)
    } else {
        res.status(404).send()
    }
})

//Create user event
userEventsRouter.post('', (req, res, next) => {
    const receivedEvent = createEvent(req.body);
    console.log(req.body)
    console.log(receivedEvent)
    if (receivedEvent){
            console.log(receivedEvent)
            userEvents.push(receivedEvent);
            res.status(201).send(receivedEvent)
    } else {
        res.status(404).send()
    }
})

module.exports = userEventsRouter;