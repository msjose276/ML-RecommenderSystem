

const express = require('express');
const Router = express.Router();

const similarMovies = require('../controllers/similarMovies');
const trending = require('../controllers/trending');


Router.route('/')
    .get(trending.trending)
    .post(similarMovies.similarMovies)

module.exports = Router;