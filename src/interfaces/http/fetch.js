const nodeFetch = require("node-fetch");

const fetch = (...args) => nodeFetch(...args).then(res => res.json());

module.exports = fetch;
