var express = require('express');
var router = express.Router();

// get请求获取所有的用户信息
router.get('/', (req, res, next) => {
  console.log(req.query);
  // 数据库操作
  // 返回json数据
  res.json({
    code: 1,
    message: "查询成功",
    data: [
      { id: 1, username: "xin" },
      { id: 2, username: "hmy" }
    ]
  })
})

// 新建用户
router.post('/', (req, res, next) => {
  console.log(req.body);

  res.json({
    code: 1,
    message: "新建成功",
    data: { id: 3, username: "test"}
  })
})

// 查询某个用户的信息
router.get('/:id', (req, res, next) => {
  console.log(req.params);

  res.json({
    code: 1,
    message: "查询成功",
    data: {
      id: 1,
      username: "xin"
    }
  })
})

// 删除某个用户
router.delete('/:id', (req, res, next) => {
  console.log(req.params);

  res.json({
    code: 1,
    message: "删除成功",
  })
})

// 修改用户信息
router.put('/:id', (req, res, next) => {
  console.log(req.params);
  console.log(req.body);

  res.json({
    code: 1,
    message: "修改成功",
  })
})

module.exports = router;
