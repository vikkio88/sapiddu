const ULID = require('ulid');
const defaultConfig = {
    primaryKeyGenerator: () => ULID.ulid()
};

class Entity {
    constructor(name, db, config = null) {
        this.name = name;
        this.db = db;
        this.config = config || defaultConfig;
    }

    find(id) {
        return this.db.getOne(this.name);
    }

    get() {
        return this.db.get(this.name);
    }

    create(body) {
        return this.db.post(this.name, body, this.config.primaryKeyGenerator());
    }

    update(id, body) {
        return this.db.put(this.name, id, body);
    }

    delete(id) {
        return this.db.delete(this.name, id);
    }
}

module.exports = {
    Entity
};
