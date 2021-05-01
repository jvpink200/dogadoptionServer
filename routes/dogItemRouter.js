const express = require('express');
const DogItem = require('../models/dogItem')
const dogItemRouter = express.Router();
const authenticate = require('../authenticate');

dogItemRouter.route('/')
.get((req, res) => {
    DogItem.find()
    .then(dogItems => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dogItems);
    })
    .catch(err => next(err));
})
.post(authenticate.verifyUser, (req, res, next) => {
    DogItem.create(req.body)
    .then(dogItem => {
        console.log('DogItem Created ', dogItem);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dogItem);
    })
    .catch(err => next(err));
})
.put(authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dogItems');
})
.delete(authenticate.verifyUser, (req, res, next) => {
    DogItem.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = dogItemRouter;