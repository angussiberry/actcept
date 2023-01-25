const express = require('express');

let venues = [];

venuesRouter = express.Router();

//Get all Events
venuesRouter.get('', (req, res, next) => {
    res.status(200).send(venues)
})

module.exports = venuesRouter;