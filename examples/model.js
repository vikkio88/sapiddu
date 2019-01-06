const entityManager = require('../src/db').entityManager();
const modelName = 'thing';
const id = '01D0GBZJ3CA2MDSPT1E9KW3G91';
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
