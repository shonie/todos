module.exports = require("nconf")
  .argv()
  .env()
  .file({ file: './config.json' });
