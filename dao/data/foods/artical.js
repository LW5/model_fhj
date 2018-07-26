const mongoose = require("mongoose")
const {unlink}  = require("fs")

// 用品查询
  module.exports.getArtical = async (yongpinggl) => {
    const data=await mongoose
      .model("yongpinggl")
      .find(yongpinggl)
      return data
  }

  module.exports.articalAdd = async (yongpinggl) => {
     return await mongoose
     .model("yongpinggl")
     .create(yongpinggl) 
     
  }

     // 删除
module.exports.articalDelet = async ({id}) => {
    // console.log(id)
    const data= await mongoose
      .model("yongpinggl")
      .find({
        _id:id
      })
    
  await unlink("public"+data[0].articalImg,()=>{})

   await mongoose
    .model("yongpinggl")
    .remove({_id:id})
}

// 修改
module.exports.articalAmend = async (yongpinggl) => {
   await mongoose
  .model("yongpinggl")
  .find({_id:yongpinggl.id})
  .update({
    articlesName:yongpinggl.articlesName,
        goodsMaterial:yongpinggl.goodsMaterial,
        goodsOnlyFor:yongpinggl.goodsOnlyFor,
        goodsSize:yongpinggl.goodsSize,
        articlesDate:yongpinggl.articlesDate,
        goodsSpecial:yongpinggl.goodsSpecial,
        goodsSupplier:yongpinggl.goodsSupplier,
        articlesPrice:yongpinggl.articlesPrice,
        articalImg:yongpinggl.articalImg,
  })
  
}
