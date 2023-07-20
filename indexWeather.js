'use strict';
const dotenv = require('dotenv');
dotenv.config();
const { PORT, URL } = process.env;
const express = require('express')
const router = require('./router');
var cors = require('cors');
const app = express()
app.use(cors());

app.use('/api', router.router);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })




app.listen(PORT);
console.log(`API_Weather app listening at ${URL}:${PORT}/api`);