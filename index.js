const db = require('./src/db');
const Entity = require('./src/Entity');
module.exports = {
    db: db.db,
    entityManager: db.entityManager,
    Entity: Entity
};
