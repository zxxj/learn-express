const express = require('express')

const router = express.Router()

// url路径参数
router.get('/login', (req, res, next) => {
	console.log(req.query); // { username: 'zhangxinxin', password: '18888' }
	res.send("login")
	next()
})

// post请求参数的获取需要使用中间件express.urlencoded解析req.body
// body参数
router.post('/register', (req, res, next) => {
	console.log(req.body); // { username: 'zhangxinxin', password: '123456' }
	res.send("register 路由中间件")
	next()
})

// params参数
router.delete('/article/:id', (req, res, next) => {
	console.log(req.params); // { id: '1' }
	res.send('删除成功')
})

module.exports = router