var express = require('express');
var router = express.Router();

const allowedHosts = ['http://localhost:63342', 'http://localhost'];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/data", (req, res)=> {

    if (allowedHosts.indexOf(req.headers.origin)) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    // res.header('Access-Control-Allow-Origin', '*');//允许所有域名访问
    res.json({name: "ucai", age: 10});
});

module.exports = router;
