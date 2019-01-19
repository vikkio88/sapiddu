const ULID = require('ulid');
const ts = () => Math.round((new Date()).getTime() / 1000);

const defaultConfig = {
    primaryKeyGenerator: () => ULID.ulid(),
    beforeCreate: data => data,
    beforeUpdate: data => data,
};
const EntityTypes = {
  TIMESTAMPS : {
      primaryKeyGenerator: defaultConfig.primaryKeyGenerator,
      beforeCreate: data => {
          data.created = ts();
          data.updated = ts();
          return data;
      },
      beforeUpdate: data => {
          data.updated = ts();
          return data;
      }
  }
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
        body = this.beforeCreate(body);
        return this.db.post(this.name, body, this.config.primaryKeyGenerator());
    }

    update(id, body) {
        body = this.beforeUpdate(body);
        return this.db.put(this.name, id, body);
    }

    delete(id) {
        return this.db.delete(this.name, id);
    }

    beforeCreate(data) {
        return this.config.beforeCreate(data);
    }

    beforeUpdate(data) {
        return this.config.beforeUpdate(data);
    }
}

module.exports = {
    Entity,
    EntityTypes
};
