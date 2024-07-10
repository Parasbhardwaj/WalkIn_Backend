const express = require("express");
const cors = require('cors');
const mainRoute = require("./src/routers/mainRoutes");

const mongo = require('./src/database/dbConnection')

const app = express();
const { port } = require("./config");

app.use(cors())
app.use(express.json({ limit: '50mb'}))
app.use(mainRoute);

mongo.mongoSetup();

app.listen(port, (err) => {
  console.log(port);
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Example app listening on port ${port}`);
});
