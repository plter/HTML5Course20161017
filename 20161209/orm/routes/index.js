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

router.get("/delete", function (req, res) {
    // req.models.User.find({_id: req.query.id}).remove(function (err) {
    //     if (!err) {
    //         res.json({code: 1, message: "Ok"});
    //     } else {
    //         console.log(err);
    //         res.json({code: 2, ormError: err});
    //     }
    // });

    req.models.User.get(req.query.id, function (err, user) {
        if (!err) {
            user.remove(function (err) {
                if (!err) {
                    res.json({code: 1, message: "Ok"});
                } else {
                    console.log(err);
                    res.json({code: 2, ormError: err});
                }
            });
        } else {
            console.log(err);
            res.json({code: 2, ormError: err});
        }
    });
});

router.post("/update", function (req, res) {
    req.models.User.get(req.body.id, function (err, user) {
        if (!err) {
            user.user = req.body.user;
            user.age = req.body.age;
            user.save(function (err) {
                if (!err) {
                    res.json({code: 1});
                } else {
                    console.log(err);
                    res.json({code: 2});
                }
            });

        } else {
            console.log(err);
            res.json({code: 2});
        }
    });
});

module.exports = router;
