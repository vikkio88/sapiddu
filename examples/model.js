require('dotenv').config();
const TOKEN = process.env.TOKEN;

const db = require('../src/db').db(TOKEN);
const modelName = 'thing';
db.post(modelName, {ciao: Math.round(Math.random() * 200)}).then(result => {
    console.log('POST', result);
    db.getOne(modelName, '01D0GBYRBG1XYPS3QB95EY6J5N').then((data) => {
        console.log('GETONE', data);
    });
    db.order(modelName, 'ciao').then((data) => {
        console.log('ORDER', data);
    });
    /*
    db.filter(modelName, 'ciao', 3).then(data => {
        console.log('FILTER', data);
    });
    */
    db.get(modelName).then((data) => {
        console.log('GET ALL', data);
    });
}).catch(error => console.log('error', error));
