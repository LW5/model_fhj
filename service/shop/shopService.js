const { addshop ,getshop,delshop,changeshop,getShopByPage} = require("../../dao/data/shop/shopDao.js")

  module.exports.addshop = async (shop) => {
    return await addshop(shop) 
  }
  module.exports.getshop = async (shop) => {
    return await getshop(shop) 
  }
  module.exports.delshop = async (shop) => {
    return await delshop(shop) 
  }
  module.exports.changeshop = async (shop) => {
    return await changeshop(shop) 
  }
  module.exports.getShopByPage = async (shop) => {
    return await getShopByPage(shop) 
  }

 