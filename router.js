const express = require('express');
const router = express.Router();
const modelAPI = require('./modelWeather');

router.get('/', async (res, req, next) => {
    try {
        modelAPI.getDefaultLocation(req, res, next)
    } catch (error) {
        console.error(error);
        return res.send({ 'code': 500, message: 'error', results: null });
    }
});

module.exports = {
    router
}