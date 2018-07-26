const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const FuwuguanliSchema = new mongoose.Schema({
  serviceName: String,    //名称
  serviceType: String,    //服务类别（关联定义）vip
  serviceSchedule:String ,//排期
  serviceCanFor:String,   //适用规格
  serviceDetial:String,   //服务规格
  serviceTime:String,     //耗时//。。。。
  serviceLevel:String,    //服务员等级
  servicePrice:Number,     //价格
  mendianguanliId: {
		type: Schema.Types.ObjectId,
		ref: 'mendianguanli'
  }
})
// debug.fuwuguanli.insert({"serviceName":"123"})
mongoose.model("fuwuguanli",FuwuguanliSchema, "fuwuguanli")