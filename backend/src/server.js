const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/files.routes');
const {responseHandler} = require("./utils/response.utils");

function bootstrap () {
  const server = express();
  server.use(cors());

  server.use(express.json());

  server.use(indexRouter);

// catch 404 and forward to error handler
  server.use(function(req, res){
    return responseHandler(res, 404, {message: "not found"})
  });

// error handler
  server.use(function(err, req, res, next) {
    return responseHandler(res, 500, {message: "server error"})
  });

  return server;

}


module.exports = bootstrap();
