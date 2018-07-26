const mongoose = require("mongoose")

//平台
module.exports.getChongwuAll= async(getChongwuAll1)=>{
      const { eachPage,curPage } = getChongwuAll1
      const count = await mongoose
      .model("chongwuguanli")
      .find()
      .count()
      const chongwuguanli = await mongoose
      .model("chongwuguanli")
      .find()
      .skip((curPage - 1) * eachPage)
      .limit(eachPage)
      .exec()
      return {
        curPage,
        eachPage,
        count,
        maxPage: Math.ceil(count / eachPage),
        chongwuguanli
      }

}
//增加宠物
module.exports.chongwu = async (chongwu1) => {
  console.log(chongwu1)
      const { mendianGliId, userId} = chongwu1
       const data1 = await mongoose
      .model("chongwuguanli")
      .create(chongwu1)
      //门店和宠物关联
      const { _id:id_cw} = data1
         await mongoose
            .model("mendianguanli")
            .update({
                _id:mendianGliId
            },{
              $push: {
                chongwuguanliId: id_cw
              } 
            })  
          //宠物和门店关联
           const data2 =  await mongoose
            .model("chongwuguanli")
            .update({
              _id:id_cw
            },{
              $push: {
                mendianguanliId: mendianGliId
              } 
            })  
          //宠物和店主关联
           await mongoose
          .model("user")
          .update({
            _id:userId
          },{
            $push: {
              chognwuguanliId: id_cw
            } 
          })  
            // .update({{}，
            //   $push: {
            //     mendianguanliId: mendianGliId
            //   }
            // })  
            //做一次查询 节约一次请求
            const data = await mongoose
            .model("mendianguanli")
            .find({_id:mendianGliId})
            .populate({
              path: "chongwuguanliId"
            })

            // console.log(data)
            return data
}

//查询宠物
module.exports.getChongwu = async (getChongwu1) => {
        const { _id:mendianId,eachPage,curPage } = getChongwu1
       
            const data = (await mongoose
              .model("mendianguanli")
              .find({_id:mendianId}))[0]
              .chongwuguanliId

              const count = await mongoose
              .model("chongwuguanli")
              .find({_id:data}) 
              .count()
            const chongwuguanli = await mongoose
              .model("chongwuguanli")
              .find({_id:data})
              .skip((curPage - 1) * eachPage)
              .limit(eachPage)
              .exec()

              // console.log(data)
              // console.log(getChongwu1)
              // console.log(chongwuguanli)
              // console.log(data1)
              // const { chongwuguanliId }  = data[0]
              // console.log(chongwuguanliId)
              return {
                curPage,
                eachPage,
                count,
                maxPage: Math.ceil(count / eachPage),
                chongwuguanli
              }
}

//修改宠物
module.exports.xGChongwu = async (xGChongwu1) => {
     const { _id,mendianguanliId } = xGChongwu1
          await mongoose
          .model("chongwuguanli")
          .find({_id})
          .update(xGChongwu1) 
          
          const data = await mongoose
          .model("mendianguanli")
          .find({_id:mendianguanliId})
          .populate({
            path: "chongwuguanliId"
          })

          return data
}

    
module.exports.sCChongwu = async (sCChongwu1) => {
      const { _id,mendianguanliId } = sCChongwu1
        await mongoose
       .model("chongwuguanli")
       .remove({_id})

      //  .update(xGChongwu1) 
       
      //  const data = await mongoose
      //  .model("mendianguanli")
      //  .find({_id:mendianguanliId})
      //  .populate({
      //    path: "chongwuguanliId"
      //  })
      //  .remove(_id)

      //  console.log(data)

      const data = await mongoose
      .model("mendianguanli")
      .find({_id:mendianguanliId})
      .populate({
        path: "chongwuguanliId"
      })
      return data
}
