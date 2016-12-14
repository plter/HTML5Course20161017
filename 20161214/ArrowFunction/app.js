/**
 * Created by plter on 2016/12/14.
 */
"use strict";

function add(a, b) {
    return a + b;
}

let add1 = (a, b) => {
    return a + b;
};

let add2 = (a, b) => a + b;

let add3 = a => a + 3;

console.log(add(1, 2));
console.log(add1(1, 2));
console.log(add2(1, 2));
console.log(add3(1));