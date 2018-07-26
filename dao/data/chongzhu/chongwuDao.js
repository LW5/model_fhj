const mongoose = require("mongoose")

//增加
module.exports.chongwu = async (chongwu1) => {
                  console.log(chongwu1)
                   await mongoose
                    .model("chongzhu")
                    .create(chongwu1)
    //做一次查询 节约一次请求
                const data = await mongoose
                .model("chongzhu")
                .find()
                return data
   
            
}

//查询
module.exports.getChongwu = async (getChongwu1) => {
   const { eachPage,curPage } = getChongwu1
      const count = await mongoose
            .model("chongzhu")
            .find() 
            .count()
      const chongzhu = await mongoose
            .model("chongzhu")
            .find()
            .sort({_id:-1})
            .skip((curPage - 1) * eachPage)
            .limit(eachPage)
            .exec()
      return {
                curPage,
                eachPage,
                count,
                maxPage: Math.ceil(count / eachPage),
                chongzhu
              }
  
}

//修改
module.exports.xGChongwu = async (xGChongwu1) => {
        console.log(xGChongwu1)
     const { _id } = xGChongwu1
          await mongoose
          .model("chongzhu")
          .find({_id})
          .update(xGChongwu1) 
          
    //       const data = await mongoose
    //       .model("mendianguanli")
    //       .find({_id:mendianguanliId})
    //       .populate({
    //         path: "chongwuguanliId"
    //       })

          return true
}

    
module.exports.sCChongwu = async (sCChongwu1) => {
        console.log(sCChongwu1)
      const { _id } = sCChongwu1
        await mongoose
       .model("chongzhu")
       .remove({_id})
  
      return true
}
