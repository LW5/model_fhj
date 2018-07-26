const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const ShangpinguanliSchema = new mongoose.Schema({
  goodsName: String,      //名称
  goodsType: String,      //品类
  goodsMaterial:String ,  //材质或制作方法
  goodsCanFor:String,     //适用规格
  goodsOnlyFor:String,    //专属规格 (vip)
  goodsSize:String,       //包装规格
  goodsTaste:String,      //口味
  goodsSpecial:String,    //特殊功用
  goodsRegion:String,     //产地
  goodsDate:String,       //出厂日期
  goodsTime:String,       //保质期
  goodsSupplier:String,   //供应商
  goodsIntro:String,      //特色说明
  goodsPrice:Number,      //价格
  goodsImg:String,         //图片
  mendianguanliId: {
		type: Schema.Types.ObjectId,
		ref: 'mendianguanli'
  }
})

mongoose.model("shangpinguanli", ShangpinguanliSchema, "shangpinguanli")