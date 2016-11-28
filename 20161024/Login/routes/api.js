var express = require('express');
var router = express.Router();

var users = new Map();

function checkUserAndPassword(req, res, next) {
    if (!req.body.user) {
        res.json({status: 2, message: "No user name"});
        return;
    }
    if (!req.body.pass) {
        res.json({status: 3, message: "No password"});
        return;
    }
    next();
}


router.post('/register', checkUserAndPassword);
router.post('/register', function (req, res, next) {
    if (users.has(req.body.user)) {
        res.json({status: 4, message: "User name already in use"});
        return;
    }
    //相当于把user当主键用
    users.set(req.body.user, {user: req.body.user, pass: req.body.pass});
    res.json({status: 1, message: "OK"});
});


router.post("/login", checkUserAndPassword);
router.post("/login", function (req, res) {
    if (!users.has(req.body.user)) {
        res.json({status: 5, message: "User name not exists"});
        return;
    }
    let user = users.get(req.body.user);
    if (user.pass != req.body.pass) {
        res.json({status: 6, message: "Password error"});
        return;
    }

    res.json({status: 1, message: "OK"});
});

module.exports = router;
