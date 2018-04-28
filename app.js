var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var ejs = require('ejs');//引入ejs

// view engine setup
//app.set('views', path.join(__dirname, 'views')); // 设置模板相对路径(相对当前目录)
//app.set('view engine', 'jade');//设置模板引擎

app.set('views', path.join(__dirname, 'views/'));  
app.engine('.html', require('ejs').renderFile);  
app.set('view engine', 'html'); //设置模板引擎 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

