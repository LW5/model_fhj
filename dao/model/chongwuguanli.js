const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const ChongwuguanliSchema = new mongoose.Schema({
  chongwuName: String,    //名字
  chongwuType: String,    //宠物的品类
  chongwuKind: String ,   //宠物的种类
  chongwuColor:String,    //宠物的颜色
  chongwuData:String,     //宠物的生日
  chongwuStyle:String,    //宠物的性情
  mendianguanliId: {
		type: Schema.Types.ObjectId,
		ref: 'mendianguanli'
  },  
  chongzhuId: {
		type: Schema.Types.ObjectId,
		ref: 'chongzhu'
  }
})

mongoose.model("chongwuguanli", ChongwuguanliSchema, "chongwuguanli")