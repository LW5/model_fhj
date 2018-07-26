const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const DingdanSchema = new mongoose.Schema({
  chongzhuId: {
		type: Schema.Types.ObjectId,
		ref: 'chongzhu'
  },
  mendianguanliId: {
		type: Schema.Types.ObjectId,
		ref: 'mendianguanli'
  },
  shangpinguanliId: {
		type: Schema.Types.ObjectId,
		ref: 'shangpinguanli'
  },
  fhstate:{
    type:String,
    default:"0"
  },
  fkstate:{
    type:String,
    default:"0"
  }
})

mongoose.model("dingdan", DingdanSchema, "dingdan")