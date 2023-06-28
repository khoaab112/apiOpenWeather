'use strict';
const dotenv = require('dotenv');
dotenv.config();
const {
    API_KEY,
    DEFAULT_LOCATION_LATITYDE,
    DEFAULT_LOCATION_LONGITUDE
} = process.env;
function getDefaultLocation() {
    console.log('12');
}
module.exports = {
    getDefaultLocation
}