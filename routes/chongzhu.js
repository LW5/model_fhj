var express = require('express');
var router = express.Router();

const {  chongwu,getChongwu,xGChongwu,sCChongwu }  = require("../service/chongzhu/chongwuService.js")

router.post('/chongwuAdd',async function(req, res, next) {
    res.send(await chongwu(req.body) )
});

router.post('/getChongwu',async function(req, res, next) {
    res.send(await getChongwu(req.body) )
});

router.post('/xGChongwu',async function(req, res, next) {
    res.send(await xGChongwu(req.body) )
});

router.post('/sCChongwu',async function(req, res, next) {
    res.send(await sCChongwu(req.body) )
});

module.exports = router;