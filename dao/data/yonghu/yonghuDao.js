const mongoose = require("mongoose")
//消息管理


module.exports.getState = async (getState1)=>{
    const { userStatus,curPage,eachPage } = getState1
    const data = await mongoose
                .model("user")
                .find({userStatus})

                const count = await mongoose
                .model("user")
                .find({userStatus}) 
                .count()
                const ClerkData =  await mongoose
                .model("user")
                .find({userStatus})
                .skip((curPage-1)*eachPage)
                .limit(eachPage)
                .exec()
                return {
                    eachPage,
                    curPage,
                    ClerkData,
                    count
        }
}

module.exports.setState = async (setState1)=>{
        const { _id,userStatus } = setState1[0]
            await mongoose.model("user")
                    .find({_id:_id})
                    .update({
                        userStatus:2
                    })
                return true
}

module.exports.delState = async (delState1)=>{
    const { _id } = delState1[0]
        await mongoose.model("user")
                .find({_id:_id})
                .remove({_id})
            return true
}

//
module.exports.addUser = async (addUser1)=>{
    console.log(addUser1)
    const data = await mongoose
                .model("user")
                .create(addUser1)
            console.log(data)
        return data
}

//删
module.exports.shanchu=async (shanchu1)=>{
    const { _id } =shanchu1[0]
    const data = await mongoose
            .model("user")
            .find({_id}) 
    const { mendianguanliId } = data[0]
    if(mendianguanliId[0]){
        console.log("in")
            await mongoose 
        .model("mendianguanli")
        .remove({_id:mendianguanliId})
    }
         await mongoose 
            .model("user")
            .remove({_id})
         
      return true
}
// 权
module.exports.quanxian = async (quanxian1)=>{
    const { _id } = quanxian1
    const count = await mongoose
    .model("user")
    .find({_id}) 
    .update(quanxian1)
     return count
}


//查
module.exports.getUser = async (getUser1) => {
    const { userType,curPage,eachPage } = getUser1
    const count = await mongoose
    .model("user")
    .find({userType}) 
    .count()
    const ClerkData =  await mongoose
      .model("user")
      .find({userType})
      .skip((curPage-1)*eachPage)
      .limit(eachPage)
      .exec()
    //   const count = ClerkData.length
     return {
         eachPage,
         curPage,
         ClerkData,
         count
     }
}