const { Router } = require("express");
const bodyParser = require("body-parser");
const createTodoController = require("./modules/todos");

module.exports = ({ repositories, logger }) => {
  const router = Router();

  const apiRouter = Router();

  apiRouter.use(bodyParser.json());

  apiRouter.use("/todos", createTodoController({ repositories, logger }));

  router.use(`/api`, apiRouter);

  return router;
};
