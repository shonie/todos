const { createContainer, asFunction, asValue } = require('awilix');
const config = require('../config');
const server = require('src/interfaces/http/server');
const router = require('src/interfaces/http/router');
const logger = require('src/infra/logger');
const repositories = require('src/infra/repositories');

const container = createContainer();

// Inject dependencies!
container.register({
  server: asFunction(server).singleton(),
  router: asFunction(router).singleton(),
  repositories: asFunction(repositories).singleton(),
  config: asValue(config),
  logger: asFunction(logger).singleton(),
});

module.exports = container;