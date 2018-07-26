const { addUsers,getUsers,mendian,shangpin,fuwu,chongwu,picApi } = require("../../dao/data/users/usersDao.js")

module.exports.addUsers = async (users) => {
    return await addUsers(users)
  }

  module.exports.getUsers = async (getUsers1) => {
    return await getUsers(getUsers1)
  }

  module.exports.mendian = async (mendian1) => {
    return await mendian(mendian1) 
  }

  module.exports.shangpin = async (shangpin1) => {
    return await shangpin(shangpin1) 
  }

  module.exports.fuwu = async (fuwu1) => {
    return await fuwu(fuwu1) 
  }

  module.exports.chongwu = async (chongwu1) => {
    return await chongwu(chongwu1) 
  }

  //picApi
  
  module.exports.picApi = async (picApi1) => {
    return await picApi(picApi1) 
  }