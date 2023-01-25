const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself website
app.use(express.static('public'));
app.use(express.json()) //middleware for parsing json data

//Import and mount the Routers
const venuesRouter = require('./venues.js');
app.use('/venues', venuesRouter);

const eventsRouter = require('./events.js');
app.use('/events', eventsRouter);

const userEventsRouter = require('./userEvents.js');
app.use('/userEvents', userEventsRouter);

const usersRouter = require('./users.js');
app.use('/users', usersRouter);

const reviewsRouter = require('./reviews.js');
app.use('/reviews', reviewsRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});