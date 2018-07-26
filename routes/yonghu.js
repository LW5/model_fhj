var express = require('express');
var router = express.Router();

const {  getUser,quanxian,shanchu,addUser,getState,setState,delState }  = require("../service/yonghu/yonghuService.js")


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//消息管理
router.post('/getState',async function(req, res, next) {
    res.send(await getState(req.body) )
});

router.post('/setState',async function(req, res, next) {
    res.send(await setState(req.body) )
});

router.post('/delState',async function(req, res, next) {
    res.send(await delState(req.body) )
});
//


router.post('/addUser',async function(req, res, next) {
    res.send(await addUser(req.body) )
});
router.post('/getUser',async function(req, res, next) {
      res.send(await getUser(req.body) )
});

router.post('/quanxian',async function(req, res, next) {
    res.send(await quanxian(req.body) )
});

router.post('/shanchu',async function(req, res, next) {
    res.send(await shanchu(req.body) )
});

module.exports = router;
