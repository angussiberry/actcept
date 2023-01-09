const express = require('express');

let events = [];

eventsRouter = express.Router();

//Get all Events
eventsRouter.get('', (req, res, next) => {
    res.status(200).send(events)
})

// Get a single Event
eventsRouter.get('/:id', (req, res, next) => {
    const foundEvent = getElementById(req.params.id, events);
    if (foundEvent){
        res.status(200).send(foundEvent)
    } else {
        res.status(404).send()
    }
})

module.exports = eventsRouter;