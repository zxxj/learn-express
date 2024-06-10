const express = require('express')

const app = express()

// 路由配置: 用户访问了http://localhost:3000/user/login 这个函数就会被执行
// .use(): 可以监听到所有类型的请求
app.use('/user/login', (req, res) => {
	res.send('login')
})

app.listen(3000, () => {
	console.log("服务器已启动");
})
