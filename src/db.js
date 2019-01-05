const axios = require('axios');
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
        get(modelName, filter = {}, orderBy = {}) {
            return instance.get(`${modelName}`);
        },
        getOne(modelName, id) {
            return instance.get(`${modelName}/${id}`);
        },
        post(modelName, id, body) {
            return instance.post(`${modelName}/${id}`, body);
        },
        delete(modelName, id) {
            return instance.delete(`${modelName}/${id}`);
        },
    };
};

module.exports = {
    db
};