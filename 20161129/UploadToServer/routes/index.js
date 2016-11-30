var express = require('express');
var router = express.Router();
var multer = require("multer");
var upload = multer({dest: "public/uploads"});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// router.post("/upload", upload.single("image"), function (req, res) {
//     req.file.url = "uploads/" + req.file.filename;
//     res.render("upload", {file: req.file});
// });


// router.post("/upload", upload.array("image"), function (req, res) {
//     res.render("upload1", {files: req.files});
// });

// router.post("/upload", upload.fields([{name: "file", maxCount: 1}, {name: "image"}]), function (req, res) {
//     res.render("upload2", {files: req.files});
// });

router.post("/upload", upload.any(), function (req, res) {
    res.render("upload3", {files: req.files});
});

router.post("/hello", upload.none(), function (req, res) {
    res.render("hello", {args: req.body});
});

module.exports = router;
