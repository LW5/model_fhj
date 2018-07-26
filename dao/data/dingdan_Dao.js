const mongoose = require("mongoose")

//增加订单
module.exports.addDD = async (data) => {
  // console.log(data)
  const date = await mongoose
    .model('dingdan')
    .create(data)
}

// 查询订单
module.exports.chaxun = async (data1) => {

  const data2 = await mongoose
    .model("dingdan")
    .find()
  // console.log(data2)
  data1 = data2
  // console.log(data1)
  return data1
}
//修改订单
module.exports.xiugai = async (date) => {
  console.log(date)
  await mongoose
    .model('dingdan')
    .find({ _id: date._id })
    .update(date)


}
//删除订单
module.exports.shanchu = async (arr) => {
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    await mongoose
      .model('dingdan')
      .remove({_id:arr[i]})
  }






}