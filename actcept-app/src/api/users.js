const express = require('express');
const { createUser, getUserById, getUserByEmail} = require('./utils');

let users = [{
    'user_id': 0,
    'name':  "Joe Bloggs",
    'email': "JoeBloggs@gmail.com",
    'password': "password",
    'dob':    "11/11/11"
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
        if(getUserById(receivedUser.user_id, users)){
            res.status(409).send(`Error: ID conflict`)
            console.error(`Error: ID conflict`)
        } else {

        if(getUserByEmail(receivedUser.email, users)){
            res.status(409).send(`Error: Account registered to ${receivedUser.email} already exists`)
            console.error(`Error: Account registered to ${receivedUser.email} already exists`)
        } else {
            users.push(receivedUser);
            res.status(201).send(receivedUser)
    }}} else {
        res.status(404).send()
    }
})

module.exports = usersRouter;