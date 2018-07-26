var mongoose = require('mongoose');
require("./model/user")
require("./model/mendianguanli")
require("./model/shangpinguanli")
require("./model/fuwuguanli")
require("./model/chongwuguanli")
require("./model/chongzhu")
// 用品
require("./model/yongpinggl")
// 上穿图片
require("./model/img")


var dbURI = 'mongodb://localhost/ai';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
