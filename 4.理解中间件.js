const express = require('express')

const app = express()


// 中间件的本质就是一个函数
// 中间件函数中有三个参数: 
// req: 请求
// res: 服务器的相应
// next: 一旦调用,中间件会把请求交给下一个中间件去处理,如果不调用next请求到这里就结束了,不会把请求传递给其他的中间件了
app.use((req, res, next) => {
	console.log("中间件1");
	next()
}, (req,res,next) => {
	console.log("中间件2");
	next()
})

app.get('/user/login', (req, res, next) => {
	console.log("登录");
	res.send('登录')
})

app.listen(3000, () => {
	console.log("服务器已启动");
})
