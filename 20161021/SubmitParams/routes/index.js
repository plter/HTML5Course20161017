var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.post("/rect", function (req, res) {


    var x = req.query.x || req.body.x || 0;
    var y = req.query.y || req.body.y || 0;
    var width = req.query.width || req.body.width || 100;
    var height = req.query.height || req.body.height || 100;
    var color = req.query.color || req.body.color || "red";

    res.send(`
<html>
<head>
    <style type="text/css">
        #rect{
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${width}px;
            height: ${height}px;
            background-color: ${color};
        }
    </style>
</head>
<body>
<div id="rect"></div>
</body>
</html>
`);
});

module.exports = router;
