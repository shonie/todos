module.exports = (app, config) =>
  app
    .param("id", (_, __, next) => next())
    .use("/api/todos/:id?", (req, res) =>
      res.redirect(
        307,
        `${config.get("TODOS_REMOTE_URL")}/${req.params.id || ""}`
      )
    );
