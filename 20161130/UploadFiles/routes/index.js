var express = require('express');
var router = express.Router();
var multer = require("multer");
const uploadsDirName = "uploads";
var upload = multer({dest: `public/${uploadsDirName}`});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post("/upload", upload.single("file"), function (req, res) {

    // res.send("OK");
    req.file.url = `${uploadsDirName}/${req.file.filename}`;

    res.render("upload", {file: req.file});
});

module.exports = router;
