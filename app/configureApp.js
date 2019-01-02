module.exports = (app, config) =>
  app.use("/api/todos", (_, res) =>
    res.redirect(307, config.get("TODOS_REMOTE_URL"))
  );
