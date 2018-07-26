const mongoose=require("mongoose")

module.exports.addImg=async imgs=>{
    const data = await mongoose
    .model("imgs")
    .create(imgs)
    return data
}

module.exports.addImg1=async imgs=>{
    const data = await mongoose
    .model("imgs")
    .create(imgs)
    return data
}