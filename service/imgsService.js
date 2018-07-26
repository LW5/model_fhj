const {addImg,addImg1,getImgsByPage,removePic,add}=require('../dao/imgsDao')

module.exports.addImg=async img=>{
    return await addImg(img)
}

module.exports.addImg1=async img=>{
    return await addImg1(img)
}

module.exports.getImgsByPage=async img=>{
    // console.log(await getImgsByPage(img))
    return await getImgsByPage(img)
}

module.exports.removePic=async _id=>{
    
     await removePic(_id)
     return await getImgsByPage(img)
}
module.exports.add=async img=>{  
    return await add(img)
}
