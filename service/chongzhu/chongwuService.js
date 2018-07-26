const { chongwu,getChongwu,xGChongwu,sCChongwu } = require("../../dao/data/chongzhu/chongwuDao.js")

  module.exports.chongwu = async (chongwu1) => {
    return await chongwu(chongwu1) 
  }

  module.exports.getChongwu = async (getChongwu1) => {
    return await getChongwu(getChongwu1) 
  }

  module.exports.xGChongwu = async (xGChongwu1) => {
    return await xGChongwu(xGChongwu1) 
  }
  
  module.exports.sCChongwu = async (sCChongwu1) => {
    return await sCChongwu(sCChongwu1) 
  }
  