var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.post("/upload", upload.any(), function (req, res) {
    res.send("OK");
});

module.exports = router;
