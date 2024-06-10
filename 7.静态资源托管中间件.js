const express = require('express')

const app = express()

app.use(express.urlencoded()) // 用来解析 x-www-form-urlencoded类型请求体
app.use(express.json()) // 用来解析json类型请求体
const userRouter = require('./路由中间件中获取参数/user')

// 静态资源托管中间件: express.static('静态资源文件夹')
// 将当前文件夹下面的static文件夹设置为静态资源文件夹
// 一旦有请求过来,会先到请求资源文件夹里面查找看看有没有静态文件,有的话就直接返回静态文件
// 比如访问localhost:3000/1.jpg, 就回去static文件夹下面找1.jpg文件
app.use(express.static('public'))

app.use('/user', userRouter)

app.listen(3000, () => {
	console.log("服务器已启动");
})
