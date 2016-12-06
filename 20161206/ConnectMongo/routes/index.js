var express = require('express');
var router = express.Router();
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

MongoClient.connect1 = function () {
    return this.connect("mongodb://localhost/mydb");
};


/* GET home page. */
router.get('/', function (req, res, next) {

    MongoClient.connect1().then(db => {
        return db.collection("users").find().toArray();
    }).then(result => {
        console.log(result);
        res.render("index", {title: "连接Mongo", users: result});
    }).catch(err => {
        console.log(err);
        res.send("Can not connect database");
    });
});

router.post("/users/add", function (req, res) {
    MongoClient.connect1().then(db => {
        return db.collection("users").insertOne({name: req.body.name, age: req.body.age});
    }).then(result => {
        res.json({code: 1, message: "Ok"});
    }).catch(err => {
        console.log(err);
        res.json({code: 2, message: "Error"});
    });
});

router.get("/users/delete", function (req, res) {
    MongoClient.connect1().then(db => {
        return db.collection("users").deleteOne({_id: mongo.ObjectId(req.query._id)});
    }).then(function (result) {
        res.json({code: 1, message: "Ok"});
    }).catch(err => {
        console.log(err);
        res.json({code: 2, message: "Error"});
    });
});

router.post("/users/update", function (req, res) {
    MongoClient.connect1().then(db => {
        return db.collection("users").updateOne(
            {_id: mongo.ObjectId(req.body._id)},
            {$set: {name: req.body.name, age: req.body.age}}
        )
    }).then(result => {
        res.json({code: 1, message: "Ok"});
    }).catch(err => {
        res.json({code: 2, message: "Error"});
        res.json();
    });
});

module.exports = router;
