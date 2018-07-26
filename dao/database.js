var mongoose = require('mongoose');
require("./model/user")
require("./model/mendianguanli")
require("./model/shangpinguanli")
require("./model/fuwuguanli")
require("./model/chongwuguanli")
require("./model/chongzhu")
var dbURI = 'mongodb://localhost/ai';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
