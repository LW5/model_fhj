const { addEmp ,getFoods,delet,amend} = require("../../dao/data/foods/foods.js")
// 食品增加
module.exports.addEmp = async movie => {
  return await addEmp(movie)
}

module.exports.getFoods = async movie => {
    return await getFoods(movie)
  }

  module.exports.delet = async movie => {
    return await delet(movie)
  }

  // 修改

 module.exports.amend = async movie => {
    return await amend(movie)
  }

