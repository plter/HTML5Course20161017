var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    // req.models.User.get(1, function (err, result) {
    //     if (!err) {
    //         res.json(result);
    //     } else {
    //         res.json(err);
    //     }
    // });

    req.models.User.find({}, function (err, result) {
        if (!err) {
            res.render("index", {users: result, title: "用户"});
        } else {
            res.json(err);
        }
    });
});

router.post("/adduser", function (req, res) {
    req.models.User.create({
        user: req.body.user,
        age: req.body.age
    }, function (err) {
        if (!err) {
            res.json({code: 1, message: "Ok"});
        } else {
            console.log(err);
            res.json({code: 2, message: "Fail", ormError: err});
        }
    });
});

module.exports = router;
