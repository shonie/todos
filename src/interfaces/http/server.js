const express = require("express");

module.exports = ({ router, logger, config }) => {
  const app = express();

  app.disable("x-powered-by");
  app.use(router);

  return {
    app,
    start: () =>
      new Promise(resolve => {
        const http = app.listen(config.get('PORT'), config.get('HOST'), () => {
          const { port, address } = http.address();
          logger.info(`🤘 Server started at http://${address}:${port}`);
          resolve();
        });
      })
  };
};
