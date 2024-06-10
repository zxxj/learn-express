var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // 将数据渲染到index.ejs模板上
  res.render('index', { title: 'Express' });
});

module.exports = router;
