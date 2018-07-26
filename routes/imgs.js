var express = require('express');
var router = express.Router();

const {getImgsByPage,removePic,add}=require('../service/imgsService')

router.get('/getImgsByPage',async function(req, res, next) {
    res.send(await getImgsByPage(req.query) );
});

router.get('/removePic',async function(req, res, next) {
    // console.log(req.query)
    res.send(await removePic(req.query))
    // res.send(await getImgsByPage(req.query) );
 
});
router.post('/add',async function(req, res, next) {
    // console.log(req.body)
    res.send(await add(req.body) );
});


module.exports = router;
