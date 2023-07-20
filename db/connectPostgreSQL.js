'use strict';
const { Pool, Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const {
    HOST,
    DATABASE,
    USER,
    PASSWORD,
    PORT
} = process.env;

console.log(USER);


const client = new Client({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORT,
});
client.connect((err, client, release) => {
    if (err) {
        return console.error('Lỗi kết nối', err);
    }
    console.log('Kết nối thành công!');
});
client.on('exit', () => {
    pool.end();
})
export default {
    client,
};