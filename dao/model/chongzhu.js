const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const ChongzhuSchema = new mongoose.Schema({
  memberPhone: String,//电话号码
  memberAcount: String,//昵称
  memberName:String ,//真实姓名
  menberCard:{
    default:0,
    type:Number
  },//会员卡
  memberImg:String,//头图
  memberAdd:String,//送货地址
  memberArea:String,//区域
  memberPoint:{
    default:0,
    type:Number
  },//积分
  chongwuId:[{
    type: Schema.Types.ObjectId,
    ref:"chongwu"
  }]
})

mongoose.model("chongzhu", ChongzhuSchema, "chongzhu")