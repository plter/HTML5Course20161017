var express = require('express');
var router = express.Router();
const multer = require("multer");
const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "photos"
});
const upload = multer({dest: "public/uploads"});

/* GET home page. */
router.get('/', function (req, res, next) {
    conn.query("SELECT * FROM photo", function (err, result) {
        if (!err) {
            res.render("index", {
                title: "所有照片",
                files: result
            });
        } else {
            console.log(err);
            res.json(err);
        }
    });
});

router.post("/apis/upload", upload.single("file"), function (req, res) {
    conn.query("INSERT INTO photo SET ?", {
        description: req.body.description,
        path: `/uploads/${req.file.filename}`
    }, function (err) {
        if (!err) {
            res.json({code: 1, message: "OK"});
        } else {
            console.log(err);
            res.json({code: err.errno, message: err.code});
        }
    });
});
module.exports = router;
