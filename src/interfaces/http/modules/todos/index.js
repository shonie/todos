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

  return router
    .param("id", (_, __, next) => next())
    .get("/:id", async (req, res) => {
      try {
        const todo = await getUseCase.byId(req.params.id);
        res.status(Status.OK).json(todo);
      } catch (error) {
        logger.error(error);
        res.status(Status.BAD_REQUEST).json({ error });
      }
    })
    .get("/", async (req, res) => {
      try {
        const todos = await getUseCase.all();
        res.status(Status.OK).json(todos);
      } catch (error) {
        logger.error(error);
        res.status(Status.BAD_REQUEST).json({ error });
      }
    })
    .post("/", async (req, res) => {
      try {
        const todo = await postUseCase.post(req.body);
        res.status(Status.OK).json(todo);
      } catch (error) {
        logger.error(error);
        res.status(Status.BAD_REQUEST).json({ error });
      }
    })
    .patch("/:id", async (req, res) => {
      try {
        const todo = await patchUseCase.patch(req.body, req.params.id);
        res.status(Status.OK).json(todo);
      } catch (error) {
        logger.error(error);
        res.status(Status.BAD_REQUEST).json({ error });
      }
    })
    .delete("/:id", async (req, res) => {
      try {
        await deleteUseCase.delete(req.params.id);
        res.status(Status.OK);
      } catch (error) {
        logger.error(error);
        res.status(Status.BAD_REQUEST).json({ error });
      }
    });
};
