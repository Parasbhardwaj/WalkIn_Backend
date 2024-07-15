const express = require("express");
const cors = require('cors');
const createError = require('http-errors')
const morgan = require('morgan')
const mainRoute = require("./src/routers/mainRoutes");

const mongo = require('./src/database/dbConnection')

const app = express();
const { port } = require("./config");

app.use(cors())
app.use(morgan('dev'))

app.use(express.json({ limit: '50mb'}))
app.use(mainRoute);

mongo.mongoSetup();


// in future put this code into a new file as a lib
app.use(async(req,res,next)=>{
  next(createError.NotFound("This route does not exist."))
})

app.use((err,req,res,next)=>{
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status,
      message: err.message
    }
  })
})

app.listen(port, (err) => {
  console.log(port);
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Example app listening on port ${port}`);
});
