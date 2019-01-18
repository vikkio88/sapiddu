# sapiddu
a small wrapper to use jsonstore.io as db

```js
const em = require('sapiddu').entityManager();

const user = em.getEntity('users');

user.create({username: "mario", password: "ciao1"}).then(result => console.log(result));
// output → { id: '01D1H3TMMY021M0KYE6VXHB58M' }
user.find("01D1H3TMMY021M0KYE6VXHB58M").then(result => console.log(result));
// output → { password: 'ciao1', username: 'mario' }
user.get().then(result => console.log(result));
// output → {'1' :{ password: 'ciaoa', username: 'mario' }, '01D1H3TMMY021M0KYE6VXHB58M': { password: 'ciao1', username: 'mario' } }
```
