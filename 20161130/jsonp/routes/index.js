var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get("/data", function (req, res) {
    res.send("callback('Hello " + req.query.name + "')");
});

module.exports = router;
