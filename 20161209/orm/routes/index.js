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

module.exports = router;
