const express = require('express');
const router = express.Router();
const modelAPI = require('./modelWeather');

router.get('/', modelAPI.getDefaultLocation);

module.exports = {
    router
}