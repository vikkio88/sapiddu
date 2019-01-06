require('dotenv').config();
const TOKEN = process.env.TOKEN;

const db = require('../src/db').db(TOKEN);
const entityManager = require('../src/db').entityManager(db);
const modelName = 'thing';
const id = '01D0GBYRBG1XYPS3QB95EY6J5N';
const thing = entityManager.getEntity(modelName);

thing.create({ciao: Math.round(Math.random() * 200)}).then(result => {
    console.log('POST', result);
    thing.find(id).then(data => {
        console.log('GETONE', data);
    });
    /*db.put(modelName, id, {banana: Math.round(Math.random() * 200)}).then(result => console.log('PUT', result));
    /*db.delete(modelName, '01D0GC1QE7YWRAKV038N9Q2E2W').then(result => console.log('DELETE', result));*/
    thing.get().then(data => {
        console.log('GET ALL', data);
    });
}).catch(error => console.log('error', error));
