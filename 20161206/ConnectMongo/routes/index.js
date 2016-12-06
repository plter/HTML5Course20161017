var express = require('express');
var router = express.Router();
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

/* GET home page. */
router.get('/', function (req, res, next) {

    MongoClient.connect("mongodb://localhost/mydb").then(db => {
        return db.collection("users").find().toArray();
    }).then(result => {
        console.log(result);
        res.render("index", {title: "连接Mongo", users: result});
    }).catch(err => {
        console.log(err);
        res.send("Can not connect database");
    });
});

module.exports = router;
