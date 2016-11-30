var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer({dest: "public/uploads"});

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

router.post("/apis/upload", upload.single("file"), function (req, res) {
    res.send(`uploads/${req.file.filename}`);
});

module.exports = router;
