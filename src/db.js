const axios = require('axios');
const Entity = require('./Entity').Entity;
const BASE_URL = 'https://www.jsonstore.io/';

const db = (token) => {
    const instance = axios.create({
        baseURL: `${BASE_URL}${token}/`,
        timeout: 4000,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return {
        order(modelName, orderKey) {
            return instance.get(`${modelName}?orderKey=${orderKey}`)
                .then(this.handleResult);
        },
        filter(modelName, name, value) {
            return instance.get(`${modelName}?orderKey=${name}&filterValue=${value}&valueType=number`)
                .then(this.handleResult);
        },
        get(modelName) {
            return instance.get(`${modelName}`)
                .then(this.handleResult);
        },
        getOne(modelName, id) {
            return instance.get(`${modelName}/${id}`)
                .then(this.handleResult);
        },
        post(modelName, body, id) {
            return instance.post(`${modelName}/${id}`, body)
                .then(this.handleResult).then(result => {
                    return new Promise((resolve, reject) => {
                        result ? resolve({id}) : reject(500);
                    });
                });
        },
        put(modelName, id, body) {
            return this.getOne(modelName, id).then(oldBody => {
                return this.post(modelName, Object.assign(oldBody, body), id);
            });
        },
        delete(modelName, id) {
            return instance.delete(`${modelName}/${id}`)
                .then(this.handleResult);
        },
        handleResult({status, data}) {
            return new Promise((resolve, reject) => {
                if (status > 299) reject(status);
                if (('ok' in data) && data.ok === true) {
                    resolve('result' in data ? data.result : true)
                }
                reject(data.error || 'Unexpected Error');
            })
        }
    };
};

const entityManager = (db, config = null) => {
    return {
        getEntity(modelName) {
            return new Entity(modelName, db, config);
        }
    }
};

module.exports = {
    db,
    entityManager
};
