/**
 * Created by plter on 2016/12/4.
 */

const http = require("http");

http.createServer((req, res) => {
    res.write("<h1>Hello World</h1>");
    res.end();
}).listen(8000);