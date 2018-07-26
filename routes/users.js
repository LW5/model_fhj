var express = require('express');
var router = express.Router();

const {  addUsers,getUsers,mendian,shangpin,fuwu,chongwu,picApi }  = require("../service/users/usersService.js")


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/getUsers',async function(req, res, next) {
      res.send(await getUsers(req.body) )
});

router.post('/addUsers',async function(req, res, next) {
      res.send(await addUsers(req.body) )
});

router.post('/mendian',async function(req, res, next) {
      res.send(await mendian(req.body) )
});

router.post('/shangpin',async function(req, res, next) {
      res.send(await shangpin(req.body) )
});

router.post('/fuwu',async function(req, res, next) {
      res.send(await fuwu(req.body) )
});

//宠物

router.post('/chongwu',async function(req, res, next) {
      res.send(await chongwu(req.body) )
});


//pic api
router.post('/picApi',async function(req, res, next) {
      res.send(await picApi(req.body) )
});
module.exports = router;
