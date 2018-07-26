var express = require('express');
var router = express.Router();

const {  addDD,chaxun,xiugai,shanchu}  = require("../service/dingdan_Service.js")

// 增加订单
router.post('/addDD',async function(req, res, next) {
    // console.log(req.body)
    res.send(await addDD(req.body) )
});
// 查询
router.post('/chaxun',async function(req, res, next) {
    res.send(await chaxun(req.body) )
});
// 修改
router.post('/xiugai',async function(req, res, next) {
    // console.log(req.body)
    res.send(await xiugai(req.body) )
});
// 删除
router.post('/shanchu',async function(req, res, next) {
    // console.log(req.body)
    res.send(await shanchu(req.body) )
});

module.exports = router;
