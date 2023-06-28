const express = require('express');
const winston = require('./winston');
const router = express.Router();
const modelAPI = require('./modelWeather');

router.get('/', async (res, req, next) => {
    try {
        modelAPI.getDefaultLocation(req, res, next)
    } catch (error) {
        winston.error(new Error(error));
        return res.send({ 'code': 500, message: 'error', results: null });
    }
});

module.exports = {
    router
}