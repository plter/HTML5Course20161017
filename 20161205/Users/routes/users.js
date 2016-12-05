var express = require('express');
var router = express.Router();
const {requireLogin} = require("./prechecks");

/**
 * @type Connection
 */
const conn = require("../source/MySqlConnection");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/register", function (req, res) {
    res.render("users/register", {title: "注册"});
});

router.get("/login", function (req, res) {
    res.render("users/login", {title: "登陆"});
});

router.get("/profile", requireLogin, function (req, res) {
    conn.query("SELECT * FROM user WHERE id = ?", [req.session.currentUser.id], function (err, result) {
        if (!err) {
            if (result.length) {
                res.render("users/profile", {title: "我的信息", user: result[0]});
            } else {
                res.send("<h1>Can not find this user</h1>");
            }
        } else {
            console.log(err);
            res.send("<h1>Database error</h1>")
        }
    });
});

module.exports = router;
