const express = require('express')

const app = express()

// use可以监听到所有方式的请求
// 除了use也可以专门的监听某种请求
app.get('/user/login', (req, res) => {
	res.send('login')
})

app.post('/user/register', (req, res) => {
	res.send('register')
})

// app.delete()
// app.patch()
// app.put()

app.listen(3000, () => {
	console.log("服务器已启动");
})
