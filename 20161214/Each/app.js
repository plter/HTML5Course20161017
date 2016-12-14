/**
 * Created by plter on 2016/12/14.
 */

// let arr = [2, 3, 4, 5, 1, 5, "Hello"];

// arr.forEach(function (item, index, arr) {
//     console.log(item);
// });

// for (let item of arr) {
//     console.log(item);
// }

// var map = new Map();
// map.set("name", "ucai");
// map.set("age", 10);
//
// map.forEach(function (value, key, map) {
//     console.log(`${key}=${value}`);
// });
//
// for (let k of map.keys()) {
//     console.log(`${k}=${map.get(k)}`);
// }

let student = {name: "ZhangSan", age: 10};

for (let key in student) {
    console.log(`${key}=${student[key]}`);
}