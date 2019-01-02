const config = require("config");
const createApp = require("app");

const HOST = config.get("HOST");

const PORT = config.get("PORT");

createApp({ config }).listen(PORT, HOST, () => {
  console.info(`Server started on http://${HOST}:${PORT}`);
});
