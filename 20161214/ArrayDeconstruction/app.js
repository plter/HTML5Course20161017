/**
 * Created by plter on 2016/12/14.
 */

let arr = [1, , 3, 4, 5];

let [, b = 10, c] = arr;

console.log(b, c);

function getData() {
    return [10, 20, "Hello"];
}

let [num1, num2, str] = getData();

console.log(num1, num2, str);
