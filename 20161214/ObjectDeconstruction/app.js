/**
 * Created by plter on 2016/12/14.
 */

const {sayHello, sayHi} = require("./Library");

let obj = {name: "ucai", age: 10, gender: "男"};

let {name, age, gender = "女"} = obj;

console.log(name, age, gender);

sayHello();
sayHi();