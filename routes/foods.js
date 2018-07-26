var express = require('express');
var router = express.Router();

const {addEmp,getFoods,delet,amend}=require("../service/foods/foodsService.js")
// 添加食品
router.post('/addEmp', async function (req, res, next) {
    // console.log(req.body)
    res.send(await addEmp(req.body))
  });



  // 删除
  router.post('/delet', async function (req, res, next) {
    // console.log(req.body)
    res.send(await delet(req.body))
  });

  // 查询
  router.post('/getFoods', async function (req, res, next) {
    // console.log(req.body)
    res.send(await getFoods(req.body))
  });
// 修改
  router.post('/amend', async function (req, res, next) {
    // console.log(req.body)
    res.send(await amend(req.body))
  });
   

  module.exports = router;