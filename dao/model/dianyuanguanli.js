const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const DianyuanguanliSchema = new mongoose.Schema({
  empName: String,        //店员姓名
  empAge: String,         //店员年龄
  empGmale:String ,       //店员性别
  empSal:String,          //店员薪资
  empYear:String,         //店员工龄
  empIdCard:String,       //店员身份证
  empCity:String,         //店员所属城市
  empjob:String,          //店员职位
  userId: {
		type: Schema.Types.ObjectId,
		ref: 'user'
  }
})
mongoose.model("dianyuanguanli",DianyuanguanliSchema, "dianyuanguanli")