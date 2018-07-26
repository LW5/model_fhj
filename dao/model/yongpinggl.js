const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const yongpingglSchema = new mongoose.Schema({
  

  articlesName: String,      //用品名称
  goodsMaterial:String ,  //用途
  goodsOnlyFor:String,    //规格型号 (vip)
  goodsSize:String,       //产地
  articlesDate:String,   //生产日期
  goodsSpecial:String,    //颜色
  goodsSupplier:String,   //供应商
  articlesPrice:Number,   //用品价格

  articalImg:String,         //图片
  mendianguanliId: {
		type: Schema.Types.ObjectId,
		ref: 'mendianguanli'
  }
})

mongoose.model("yongpinggl", yongpingglSchema, "yongpinggl")