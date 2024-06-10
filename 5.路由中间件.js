const express = require('express')

const app = express()

// 利用路由中间件可以把项目中每个功能的代码拆分到不同的文件中,不至于在index.js文件中写过多的代码
const userRouter = require('./路由中间件/user')

app.use('/user', userRouter)

app.listen(3000, () => {
	console.log("服务器已启动");
})
