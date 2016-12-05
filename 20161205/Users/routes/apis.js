var express = require('express');
var router = express.Router();
const Status = require("../source/Status");
const md5 = require("md5-js");
const Tools = require("../source/Tools");

const {
    checkPasswordInput,
    checkUserInput,
    checkUserIdInput,
    checkAgeInput,
    checkCurrentUser
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
            pass: Tools.translatePassword(req.body.pass, req.body.user),
            age: 1
        }, function (err, result) {
            if (!err) {
                req.session.currentUser = {
                    id: result.insertId,
                    user: req.body.user
                };
                res.json(Status.makeOkResult());
            } else {
                res.json(Status.makeResult(err.errno, err.code));
            }
        });
    });


router.post("/users/login", checkUserInput, checkPasswordInput, function (req, res) {

    conn.query("SELECT * FROM user WHERE user = ?", [req.body.user], function (err, result) {
        if (!err) {
            if (result.length) {
                let user = result[0];
                if (user.pass == Tools.translatePassword(req.body.pass, req.body.user)) {
                    delete user.pass;

                    req.session.currentUser = user;
                    res.json(Status.makeOkResult(user));
                } else {
                    res.json(Status.makeResult(Status.STATE_PASSWORD_ERROR, Status.STATE_PASSWORD_ERROR_MESSAGE));
                }

            } else {
                res.json(Status.makeResult(Status.STATE_NO_SUCH_USER, Status.STATE_NO_SUCH_USER_MESSAGE));
            }
        } else {
            res.json(Status.makeResult(err.errno, err.code));
        }
    });
});

router.post("/users/update",
    checkUserInput,
    checkUserIdInput,
    checkAgeInput,
    checkCurrentUser,
    function (req, res) {
        conn.query("UPDATE user SET user = ?, age = ? WHERE id = ?", [req.body.user, req.body.age, req.body.id], function (err) {
            if (!err) {
                res.json(Status.makeOkResult());
            } else {
                res.json(Status.makeResult(err.errno, err.code));
            }
        });
    });


module.exports = router;
