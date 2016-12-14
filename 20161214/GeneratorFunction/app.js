/**
 * Created by plter on 2016/12/14.
 */
"use strict";

function *run() {
    console.log("Start");
    let param = yield "Step 1";
    console.log("Step 1", param);
    yield "Step 2";
    console.log("Step 2");
    console.log("Step 3");
    console.log("End");
}

let g = run();
let result = g.next();
console.log(result);

result = g.next("Input to Step 1");
console.log(result);


// while (!(result = g.next()).done) {
//     console.log(result);
// }