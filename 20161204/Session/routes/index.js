var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/count", function (req, res) {
    if (!req.session.count) {
        req.session.count = 0;
    }

    req.session.count++;
    res.send("<h1>Count: " + req.session.count + "</h1>");
});

module.exports = router;
