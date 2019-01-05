const TOKEN = '';

const db = require('../src/db').db(TOKEN);

db.post('users', 3, {
    ciao: 3
}).then(({data}) => {
    console.log('POST', data);
    db.getOne('users', 1).then(({data}) => {
        console.log('GETONE', data);
    });

    db.get('users', 1).then(({data}) => {
        console.log('GET', data);
    });
});