const createTodosRepo = require("src/infra/repositories/todos");

module.exports = container => ({
  todos: createTodosRepo(container)
});
