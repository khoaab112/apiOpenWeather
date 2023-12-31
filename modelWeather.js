'use strict';
const dotenv = require('dotenv');
const axios = require('axios');
const logger = require('./winston');
dotenv.config();
const {
    API_KEY,
    DEFAULT_LOCATION_LATITYDE,
    DEFAULT_LOCATION_LONGITUDE
} = process.env;


const lang = 'vi'
const units = 'metric'
    //lấy thông tin hn
async function getDefaultLocation(res, req, next) {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                lat: DEFAULT_LOCATION_LATITYDE,
                lon: DEFAULT_LOCATION_LONGITUDE,
                appid: API_KEY,
                lang: lang,
                units: units
            }
        });

        const weatherData = response.data;
        return res.send({ 'code': 200, message: 'success', results: weatherData });
        // return res.json(weatherDataa);
    } catch (error) {
        console.error(error);
        logger.error(new Error(error));
        return res.send({ 'code': 500, message: 'error', results: null });
        //    return res.status(500).json({ error: 'Something went wrong' });
    }
}
//tự động lấy 20ph rồi put vào database
//ghi log
//tạo hàm lấy tọa độ trong database rồi put vào
module.exports = {
    getDefaultLocation
}