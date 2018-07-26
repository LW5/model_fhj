const mongoose = require("mongoose")

module.exports.addEmp = async (fuwuguanli) => {
    return await mongoose
      .model("fuwuguanli")
      .create(fuwuguanli)
  }


  module.exports.getFoods = async (fuwuguanli) => {
    const data=await mongoose
      .model("fuwuguanli")
      .find(fuwuguanli)
      console.log(data)
      return data
  }

  // 删除
module.exports.delet = async ({id}) => {
    return await mongoose
      .model("fuwuguanli")
      .remove({_id:id})
  }