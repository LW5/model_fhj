var express = require('express');
var router = express.Router();

const {articalAdd,getArtical,articalDelet,articalAmend}=require("../service/foods/articalService.js")

// 添加用品
router.post('/articalAdd', async function (req, res, next) {
  // console.log(req.body)
  res.send(await articalAdd(req.body))
});



   // 查询用品
   router.post('/getArtical', async function (req, res, next) {
    // console.log(req.body)
    res.send(await getArtical(req.body))
  });

  // 用品删除
  router.post('/articalDelet', async function (req, res, next) {
    // console.log(req.body)
    res.send(await articalDelet(req.body))
  });


  // 用品修改
  router.post('/articalAmend', async function (req, res, next) {
    // console.log(req.body)
    res.send(await articalAmend(req.body))
  });


  module.exports = router;