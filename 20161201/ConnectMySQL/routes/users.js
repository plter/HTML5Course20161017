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
    conn.query("SELECT * FROM users", function (err, result) {
        if (!err) {
            res.render("users/get", {users: result});
        } else {
            res.json(err);
        }
    });
});


module.exports = router;
