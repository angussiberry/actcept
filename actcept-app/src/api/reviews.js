const express = require('express');
const { createReview, getReviewById } = require('./utils');

let reviews = [  {
    "review_id": 0,
    "star_rating":  "5",
    "description": "queryArguments.description",
    "date":  "queryArguments.date",
    "user_id": "queryArguments.user_id",
    "event_id": "queryArguments.event_id"
  }];

reviewsRouter = express.Router();

//Get all reviews
reviewsRouter.get('', (req, res, next) => {
    res.status(200).send(reviews)
});

// Get a single review
reviewsRouter.get('/:review_id', (req, res, next) => {
    const foundReview = getReviewById(req.params.review_id, reviews);
    if (foundReview){
        res.status(200).send(foundReview)
    } else {
        res.status(404).send()
    }
});

//Create user review
reviewsRouter.post('', (req, res, next) => {
    const receivedReview = createReview(req.body);
    if (receivedReview){
            reviews.push(receivedReview);
            res.status(201).send(receivedReview)
    } else {
        res.status(404).send()
    }
});

//delete review
reviewsRouter.delete('/:review_id', (req, res, next) => {
    const reviewIndex = getReviewById(req.params.review_id, reviews);
    if (reviewIndex !== -1){
        reviews.splice(reviewIndex,1);
        res.status(204).send()
    } else {
        res.send(404).send()
    }
});

module.exports = reviewsRouter;