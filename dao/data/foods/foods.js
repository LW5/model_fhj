const mongoose = require("mongoose")
const {unlink}  = require("fs")


module.exports.addEmp = async (shangpinguanli) => {
    return await mongoose
      .model("shangpinguanli")
      .create(shangpinguanli)
  }


    // 删除
module.exports.delet = async ({id}) => {
      const data=await mongoose
      .model("shangpinguanli")
      .find({_id:id})
      await unlink("public"+data[0].foodsImg,()=>{})

     await mongoose
    .model("shangpinguanli")
    .remove({_id:id})
}

// 食品查询
  module.exports.getFoods = async (shangpinguanli) => {
    const data=await mongoose
      .model("shangpinguanli")
      .find(shangpinguanli)
      return data
  }

  // 修改
  module.exports.amend = async (shangpinguanli) => {
     await mongoose
      .model("shangpinguanli")
      .find({_id:shangpinguanli.id})
      .update({
        goodsName:shangpinguanli.goodsName,
        goodsCanFor:shangpinguanli.goodsCanFor,
        goodsTaste:shangpinguanli.goodsTaste,
        goodsRegion:shangpinguanli.goodsRegion,
        goodsDate:shangpinguanli.goodsDate,
        goodsTime:shangpinguanli.goodsTime,
        goodsIntro:shangpinguanli.goodsIntro,
        goodsPrice:shangpinguanli.goodsPrice,
        foodsImg:shangpinguanli.foodsImg
      })
  }


