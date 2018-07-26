const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const ShangpinguanliSchema = new mongoose.Schema({
  goodsName: String,      //名称食品
  goodsCanFor:String,     //适用狗狗
  goodsTaste:String,      //口味
  goodsRegion:String,     //产地
  goodsDate:String,       //出厂日期
  goodsTime:String,       //保质期
  goodsIntro:String,      //描述
  goodsPrice:Number,      //价格

  
  foodsImg:String,         //图片
  mendianguanliId: {
		type: Schema.Types.ObjectId,
		ref: 'mendianguanli'
  }
})

mongoose.model("shangpinguanli", ShangpinguanliSchema, "shangpinguanli")