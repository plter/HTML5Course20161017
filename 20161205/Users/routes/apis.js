var express = require('express');
var router = express.Router();
const Status = require("../source/Status");
const md5 = require("md5-js");

const {
    checkPasswordInput,
    checkUserInput
} = require("./prechecks");

/**
 * @type Connection
 */
const conn = require("../source/MySqlConnection");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.post("/users/register",
    checkUserInput,
    checkPasswordInput,
    function (req, res) {
        conn.query("INSERT INTO user SET ?", {
            user: req.body.user,
            pass: md5(md5(req.body.pass) + md5(req.body.user)),
            age: 1
        }, function (err) {
            if (!err) {
                res.json(Status.makeOkResult());
            } else {
                res.json(Status.makeResult(err.errno, err.code));
            }
        });
    });

module.exports = router;
