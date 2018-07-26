const { getUser,quanxian,shanchu,addUser,getState,setState,delState } = require("../../dao/data/yonghu/yonghuDao.js")
//消息管理

module.exports.getState = async (getState1) => {
  return await getState(getState1)
}
module.exports.setState = async (setState1) => {
  return await setState(setState1)
}

module.exports.delState = async (delState1) => {
  return await delState(delState1)
}
//
module.exports.addUser = async (addUser1) => {
    return await addUser(addUser1)
  }

module.exports.getUser = async (getUser1) => {
    return await getUser(getUser1)
  }
  
module.exports.quanxian = async (quanxian1) => {
    return await quanxian(quanxian1)
  }

  module.exports.shanchu = async (shanchu1) => {
    return await shanchu(shanchu1)
  }