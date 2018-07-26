var express = require('express');
var router = express.Router();

const {uploadFile} = require('../util/upload')

const { addImg,addImg1 } = require("../service/imgsService")

router.post('/upload', async function (req, res, next) {
	// 上传文件事件
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'yongpinggl',
		//路径
		path: "./public/img/",
	})
	// console.log(await addImg(data))
	res.send(await addImg(data))
	// console.log(await addImg(data))

});
// 食品
router.post('/upload1', async function (req, res, next) {
	// 上传文件事件
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'shangpinguanli',
		//路径
		path: "./public/img/",
	})
	// console.log(await addImg(data))
	res.send(await addImg1(data))
	// console.log(await addImg(data))

});

module.exports = router;