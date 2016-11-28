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

router.get("/hello", (req, res)=> {
    res.send(`Hello ${req.query.user}`);
});

router.post("/hello", (req, res)=> {
    // req.on("data", data=> {
    //     console.log(data.toString());
    // });

    res.send(`Hello ${req.body.user}`);
});

router.post("/hello.json", (req, res)=> {
    var str = "";
    req.on("data", data=> {
        str += data;
    });
    req.on("end", ()=> {
        var obj = JSON.parse(str);
        // res.send("Hello");
        res.json({result: `Hello ${obj.user}`});
    });
});

module.exports = router;
