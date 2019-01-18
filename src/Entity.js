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
        return this.db.getOne(this.name, id);
    }

    get() {
        return this.db.get(this.name);
    }

    filtered({key, value}) {
        return this.db.filter(this.name, key, value);
    }

    ordered({key}) {
        return this.db.order(this.name, key);
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
