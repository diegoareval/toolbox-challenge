const express = require('express');
const cors = require('cors');
const app = express();
const indexRouter = require('./routes/index');

app.use(cors());

app.use(express.json());

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req,res){
  res.status(404).json({message: "not found"});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
