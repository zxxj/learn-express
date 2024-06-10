const express = require('express')

const router = express.Router()

router.get('/login', (req, res, next) => {
	res.send("login")
	next()
})

router.post('/register', (req, res, next) => {
	res.send("register 路由中间件")
	next()
})

module.exports = router