/**
 * Created by plter on 2016/12/6.
 */

const http = require("http");
const express = require("express");

const app = express();

// const server = http.createServer(function (req, res) {
//     switch (req.url) {
//         case "/a":
//             res.end("<h1>Page a</h1>");
//             break;
//         case "/b":
//             res.end("<h1>Page b</h1>");
//             break;
//     }
//
// });
const server = http.createServer(app);
server.listen(8000);

const router = express.Router();
router.get("/", function (req, res) {
    res.send(`<h1>Hello ${req.words}</h1>`);
});

// app.use("/", function (req, res) {
//     res.send("<h1>Hello World</h1>");
// });

app.use(function (req, res, next) {
    req.words = "Hello World";
    next();
});
app.use("/", router);