const TOKEN = '';

const db = require('../src/db').db(TOKEN);

db.post('users', 19, {ciao: 19}).then(() => {
    console.log('POST', 'ok');
    db.getOne('users', 1).then((data) => {
        console.log('GETONE', data);
    });
    /*

    db.order('users', 'ciao').then(({data}) => {
        console.log('ORDER', data);
    });
    
    db.filter('users', 'ciao', 3).then(({data}) => {
        console.log('FILTER', data);
    });
    */
    db.get('users').then((data) => {
        console.log('GET', data);
    });
}).catch(error => console.log(error));