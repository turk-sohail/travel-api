const express = require("express");
const app = express();
const apiRoutes = require("./src/routes");
const { logger } = require("./src/config");
const path = require("path");

const { serverConfig, dbConfig } = require("./src/config");
const PORT = serverConfig.PORT;
app.use(express.json());
//app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "../public")));
/*
  db connection
*/

//app.use("public", express.static(path.join(__dirname, "/public")));

app.use("/api", apiRoutes);

async function start(params) {
  await dbConfig.startDB();
  app.listen(PORT, () => {
    logger.info(`successfully running on port ${PORT}`, "root", {});
  });
}

start();
