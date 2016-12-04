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


function checkUserInput(req, res, next) {
    if (req.body.user) {
        next();
    } else {
        res.json({code: 3, message: "No user input"});
    }
}

function checkAgeInput(req, res, next) {
    if (req.body.age) {
        next();
    } else {
        res.json({code: 4, message: "No age input"});
    }
}

function checkUserIdInput(req, res, next) {
    if (req.body.id || req.query.id) {
        next();
    } else {
        res.json({code: 5, message: "No id input"});
    }
}


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/get", function (req, res) {
    // conn.query("SELECT * FROM users WHERE id = ?", [1], function (err, result) {
    conn.query("SELECT * FROM users", [1], function (err, result) {
        if (!err) {
            res.render("users/get", {users: result});
        } else {
            res.json(err);
        }
    });
});

router.post("/add", function (req, res) {
    conn.query(`INSERT INTO users SET ?`, req.body, function (err) {
        if (!err) {
            res.json({code: 1, message: "OK"});
        } else {
            res.json({code: 2, message: "Can not add user", mysqlError: err});
        }
    });
});

router.get("/delete",
    checkUserIdInput,
    function (req, res) {
        conn.query("DELETE FROM users WHERE id = ?", [req.query.id], function (err) {
            if (!err) {
                res.json({code: 1, message: "OK"});
            } else {
                console.log(err);
                res.json({code: 2, message: "Can not delete this user"});
            }
        });
    });

// router.post("/update", checkUserInput);
router.post("/update",
    checkUserIdInput,
    checkUserInput,
    checkAgeInput,
    function (req, res) {
        conn.query("UPDATE users SET user = ?, age = ? WHERE id = ?",
            [req.body.user, req.body.age, req.body.id],
            function (err) {
                if (!err) {
                    res.json({code: 1, message: "OK"});
                } else {
                    console.log(err);
                    res.json({code: 2, message: "Can not update user"});
                }
            }
        );
    });


module.exports = router;
