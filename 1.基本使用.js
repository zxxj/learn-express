const express = require('express')

// 使用express创建一个http服务器对象
const app = express()

// 监听对应路径的请求
app.get('/', (req,res) => {
	
	// 服务器响应
	res.send("hello world")
})

// 启动服务器
app.listen(3000, () => {
	console.log('服务器正在运行');
})