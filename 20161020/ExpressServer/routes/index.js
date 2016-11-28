var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/mypage", function (request, response) {
    if (request.query.id == 1) {
        response.send(`<html>
<head>
    <title>页面标题</title>
</head>
<body>
    <div>这是我的第一个Nodejs页面</div>
</body>
</html>`);
    } else if (request.query.id == 2) {
        response.send("另一个页面");
    } else {
        response.send("没有参数");
    }
});

router.get("/data", function (req, res) {
    res.send("Hello");
});

router.get("/result", function (req, res) {
    res.send("Hello " + req.query.user);
});

module.exports = router;
