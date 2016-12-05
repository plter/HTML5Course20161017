var express = require('express');
var router = express.Router();

const {
    checkPasswordInput,
    checkUserInput
} = require("./prechecks");


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/users/register",
    checkUserInput,
    checkPasswordInput,
    function (req, res) {

    });

module.exports = router;
