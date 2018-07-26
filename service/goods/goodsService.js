const { addEmp ,getFoods,delet} = require("../../dao/data/goods/goods.js")

module.exports.addEmp = async movie => {
  return await addEmp(movie)
}

module.exports.getFoods = async movie => {
    return await getFoods(movie)
  }

  module.exports.delet = async movie => {
    return await delet(movie)
  }