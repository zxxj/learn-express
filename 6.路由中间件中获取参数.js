const express = require('express')

const app = express()

app.use(express.urlencoded()) // 用来解析 x-www-form-urlencoded类型请求体
app.use(express.json()) // 用来解析json类型请求体
const userRouter = require('./路由中间件中获取参数/user')

app.use('/user', userRouter)

app.listen(3000, () => {
	console.log("服务器已启动");
})
