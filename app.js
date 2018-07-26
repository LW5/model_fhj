var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chongwuRouter = require('./routes/chongwu');
var chongzhuRouter = require('./routes/chongzhu');
var yonghuRouter = require('./routes/yonghu');
//门店管理
var shopRouter = require('./routes/shop');
// var filesRouter = require('./routes/files');
var imgsRouter = require('./routes/imgs');
//服务管理
var goodsRouter = require('./routes/goods');

// 食品添加
var foodsRouter = require('./routes/foods');
// 用品
var articalRouter = require('./routes/artical');
//  图片
var filesRouter = require('./routes/files');
// 订单
var dingdanRouter = require('./routes/dingdan');

require("./dao/database")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chongwu', chongwuRouter);
app.use('/chongzhu', chongzhuRouter);
app.use('/yonghu', yonghuRouter);

app.use('/shop',shopRouter);
app.use('/files',filesRouter);
app.use('/imgs',imgsRouter);

// 服务管理
app.use('/goods', goodsRouter);
// 食品添加
app.use('/foods', foodsRouter);
// 用品
app.use('/artical', articalRouter);
// 订单
app.use('/dingdan', dingdanRouter);
// 图片上传
// app.use('/files', filesRouter);

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

 var server = app.listen(3111, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});