var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get("/data", function (req, res) {
    // res.json({name: "ucai", age: 10});
    res.jsonp({name: "ucai", age: 10});//使用jsonp，则该数据支持跨城访问
});

module.exports = router;
