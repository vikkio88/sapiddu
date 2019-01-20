# sapiddu
a small wrapper to use jsonstore.io as db

## Install
```
npm i sapiddu
```
You will need to have a .env file on the root of your project with:
```
TOKEN=THE_JSON_STORE_IO_TOKEN
```
to get the [jsonstore.io](https://jsonstore.io) token head to their website.

```js
const sapiddu = require('sapiddu');

const em = sapiddu.entityManager();
const people = em.getEntity('people', sapiddu.EntityTypes.TIMESTAMPS);

people.create({
    name:'Mario', 
    surname: 'Rossi'
}).then(result => console.log(result));
// output → { id: '01D1NQBVYS9JNZ699J0M6V1CMG' }

// At some other point
people.get().then(result => console.log(result));
/* output →
{
    '01D1NQBVYS9JNZ699J0M6V1CMG': {
        name: 'Mario',
        surname: 'Rossi',
        created: 1547991118,
        updated: 1547991118,
     }
}
*/
```
