const { Router } = require("express");
const Status = require("http-status");
const todoDomain = require("src/app/todo");
const expressWinston = require("express-winston");

module.exports = ({ logger, repositories }) => {
  const router = Router();

  router.use(expressWinston.logger(logger));

  const getUseCase = todoDomain.get(repositories.todos);

  const postUseCase = todoDomain.post(repositories.todos);

  const patchUseCase = todoDomain.patch(repositories.todos);

  const deleteUseCase = todoDomain.delete(repositories.todos);

  router.param("id", (_, __, next) => next());

  router.get("/:id", async (req, res) => {
    try {
      const todo = await getUseCase.byId(req.params.id);
      res.status(Status.OK).json(todo);
    } catch (error) {
      logger.error(error);
      res.status(Status.BAD_REQUEST).json({ error });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const todos = await getUseCase.all();
      res.status(Status.OK).json(todos);
    } catch (error) {
      logger.error(error);
      res.status(Status.BAD_REQUEST).json({ error });
    }
  });

  router.post("/", async (req, res) => {
    try {
      const todo = await postUseCase.post(req.body);
      res.status(Status.OK).json(todo);
    } catch (error) {
      logger.error(error);
      res.status(Status.BAD_REQUEST).json({ error });
    }
  });
  router.patch("/:id", async (req, res) => {
    try {
      const todo = await patchUseCase.patch(req.body, req.params.id);
      res.status(Status.OK).json(todo);
    } catch (error) {
      logger.error(error);
      res.status(Status.BAD_REQUEST).json({ error });
    }
  });
  router.delete("/", async (req, res) => {
    try {
      const todo = await deleteUseCase.delete(req.body);
      res.status(Status.OK).json(todo);
    } catch (error) {
      logger.error(error);
      res.status(Status.BAD_REQUEST).json({ error });
    }
  });

  return router;
};
