const mongoose = require("mongoose")
const { unlink } = require("fs")

//增加用户管理
module.exports.addshop = async (mendianguanli) => {
    const {imgsId,userId } = mendianguanli
    // console.log(imgsId)
    const {_id:mendianId} = await mongoose
   
     .model("mendianguanli")
     .create(mendianguanli)
    //  console.log(_id)

    //绑定img
     await mongoose
     .model("mendianguanli")
     .update({
        _id:mendianId
     },{
         $push:{
            imgsId:imgsId,
         }
     })
   //门店和店主绑定
   await mongoose
   .model("user")
   .update({
     _id:userId
   },{
     $push: {
        mendianguanliId:mendianId
     } 
   })  
//门店和店主绑定
    await mongoose
    .model("mendianguanli")
    .update({
    _id:mendianId
    },{
        $push:{
             userId:userId,
        }
    })
   return true
}
module.exports.getshop = async (mendianguanli) => {
   const data = await mongoose
   .model("mendianguanli")
   .find(mendianguanli) 
    let ar = data[0].imgsId
    for(let i = 0;i<ar.length;i++){
       if(ar[i]==ar[i]){
           ar.splice(i,1)
       }
    }
   return data
}

module.exports.delshop = async ({id}) => {
 const data=   await mongoose 
    .model("mendianguanli")
    .find({
        _id:id
    })
    // console.log(data)
    await unlink("public"+data[0].shopImg,()=>{})
    await unlink("public"+data[0].shopLicenceImg,()=>{})
    await unlink("public"+data[0].shopUserImg,()=>{})
    // console.log(data)
   await mongoose
   .model("mendianguanli")
   .remove({
       _id:id
   })
 }
 module.exports.changeshop = async (mendianguanli) => {
    await mongoose
    .model("mendianguanli")
    .find({_id:mendianguanli.id})
    .update({
        shopFeature: mendianguanli.shopFeature,
        shopAdd: mendianguanli.shopAdd,
        shopCorporate: mendianguanli.shopCorporate,
        shopImg: mendianguanli.shopImg,
        shopLicenceImg: mendianguanli.shopLicenceImg,
        shopLocation: mendianguanli.shopLocation,
        shopName: mendianguanli.shopName,
        shopTel: mendianguanli.shopTel,
        shopUserImg: mendianguanli.shopUserImg,
    })
    
 }
 module.exports.getShopByPage = async ({currentPage,eachpage,_id}) => {
     let rows =[],count=0
     const data = await mongoose
                    .model("user")
                    .find({_id})
              if(data[0].mendianguanliId){
                  console.log("in")
                const  shopModle = mongoose.model("mendianguanli")
                 rows = await shopModle
                  .find({_id:data[0].mendianguanliId})
                  .sort({
                    _id: -1
                  })
                  .skip((currentPage - 1) * eachpage)
                  .limit(eachpage)
                  .exec()
                  count = rows.length
              }
      

    return {
        currentPage,
        eachpage,
        count,
        maxPage: Math.ceil(count / eachpage),
        rows
    }
 }