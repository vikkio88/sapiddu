require('dotenv').config();
const TOKEN = process.env.TOKEN;

const db = require('../src/db').db(TOKEN);
db.post('users', 20, {ciao: 12}).then(result => {
    console.log('POST', result);
    db.getOne('users', 1).then((data) => {
        console.log('GETONE', data);
    });
    db.order('users', 'ciao').then(({data}) => {
        console.log('ORDER', data);
    });
    db.filter('users', 'ciao', 3).then(data => {
        console.log('FILTER', data);
    });
    db.get('users').then((data) => {
        console.log('GET', data);
    });
}).catch(error => console.log('error', error));
