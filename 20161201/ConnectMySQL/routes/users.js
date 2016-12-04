var express = require('express');
var router = express.Router();
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

conn.connect(function (err) {
    if (err) {
        console.log(err);
        console.error("无法连接数据库");
    }
});


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/get", function (req, res) {
    // conn.query("SELECT * FROM users WHERE id = ?", [1], function (err, result) {
    conn.query("SELECT * FROM users", [1], function (err, result) {
        if (!err) {
            res.render("users/get", {users: result});
        } else {
            res.json(err);
        }
    });
});

router.post("/add", function (req, res) {
    conn.query(`INSERT INTO users SET ?`, req.body, function (err) {
        if (!err) {
            res.json({code: 1, message: "OK"});
        } else {
            res.json({code: 2, message: "Can not add user", mysqlError: err});
        }
    });
});

router.get("/delete", function (req, res) {
    conn.query("DELETE FROM users WHERE id = ?", [req.query.id], function (err) {
        if (!err) {
            res.json({code: 1, message: "OK"});
        } else {
            console.log(err);
            res.json({code: 2, message: "Can not delete this user"});
        }
    });
});


module.exports = router;
