var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get("/apis/hello", function (req, res) {
    res.send(`Hello ${req.query.name}`);
});

router.post("/apis/hello", upload.none(), function (req, res) {
    res.send(`Hello ${req.body.name}`);
});

module.exports = router;
