// http错误插件
var createError = require('http-errors');

// express框架
var express = require('express');

// node内置模块path
var path = require('path');

// 解析cookie插件
var cookieParser = require('cookie-parser');

// 日志插件
var logger = require('morgan');

// 引入路由中间件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 模板引擎
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 挂载插件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 挂载路由中间件
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
