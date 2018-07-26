const { addDD,chaxun,xiugai,shanchu} = require("../dao/data/dingdan_Dao.js")

  module.exports.addDD = async (data) => {
    return await addDD(data) 
  }

  module.exports.chaxun = async (data1) => {
    return await chaxun(data1) 
    
  }
  module.exports.xiugai = async (date) => {
    return await xiugai(date) 
    
  }
  module.exports.shanchu = async (arr) => {
    console.log(arr)
    return await shanchu(arr) 
    
  }
