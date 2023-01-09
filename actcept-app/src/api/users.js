const express = require('express');
const { createUser, getUserById } = require('./utils');

let users = [{
    'user_id': 0,
    'name':  "Joe Bloggs",
    'email': "JoeBloggs@gmail.com",
    'password': "password",
    'dob':    11/11/11
  }];

usersRouter = express.Router();

//Get all Events
usersRouter.get('', (req, res, next) => {
    res.status(200).send(users)
})

// Get a single Event
usersRouter.get('/:user_id', (req, res, next) => {
    const foundUser = getUserById(req.params.user_id, users);
    if (foundUser){
        res.status(200).send(foundUser)
    } else {
        res.status(404).send()
    }
})

//Create user event
usersRouter.post('', (req, res, next) => {
    const receivedUser = createUser(req.body);
    if (receivedUser){
            users.push(receivedUser);
            res.status(201).send(receivedUser)
    } else {
        res.status(404).send()
    }
})

module.exports = usersRouter;