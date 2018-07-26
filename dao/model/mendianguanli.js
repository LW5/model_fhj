const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const MendianguanliSchema = new mongoose.Schema({
  shopName: String,      //名称
  shopLicenceImg:String ,//营业执照图片
  shopUserImg:String ,   //身份证图片
  shopAdd:String,        //营业执照地址
  shopLocation:String,   //定位
  shopCorporate:String,  //法人
  shopTel:Number,        //联系电话
  shopImg:String,        //头图
  shopFeature:String,    //简介
  shangpinguanliId: [{
		type: Schema.Types.ObjectId,
		ref: 'shangpinguanli'
  }],
  fuwuguanliId: [{
		type: Schema.Types.ObjectId,
		ref: 'fuwuguanli'
  }],
  chongwuguanliId: [{
		type: Schema.Types.ObjectId,
		ref: 'chongwuguanli'
  }],
  imgsId: [{
		type: Schema.Types.ObjectId,
		ref: 'imgs'
  }],
  userId: {
		type: Schema.Types.ObjectId,
		ref: 'user'
  }
 
})

mongoose.model("mendianguanli", MendianguanliSchema, "mendianguanli")