const { articalAdd,getArtical,articalDelet,articalAmend} = require("../../dao/data/foods/artical.js")




  // 用品查询

  module.exports.getArtical = async movie => {
    return await getArtical(movie)
  }
// 增加
  module.exports.articalAdd = async movie => {
    return await articalAdd(movie)
  }
// 用品删除
  module.exports.articalDelet = async movie => {
    return await articalDelet(movie)
  }

  // 用品修改
  module.exports.articalAmend = async movie => {
    return await articalAmend(movie)
  }
