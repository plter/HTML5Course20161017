/**
 * Created by plter on 2016/12/14.
 */


// let obj = {};
// let objProxy = new Proxy(obj, {
//     get: function (target, property, receiver) {
//         return function () {
//             console.log("Hello World");
//         }
//     }
// });
//
// objProxy.word = "Hello";
//
// objProxy.hi();
// objProxy.hello();

function createMap() {
    return new Proxy(new Map(), {
        get: function (target, property, receiver) {
            if (target[property]) {
                let pro = target[property];
                if (typeof pro == "function") {
                    return pro.bind(target);
                } else {
                    return pro;
                }
            } else {
                return target.get(property);
            }
        }
    });
}

let map = createMap();
map.set("name", "ucai");
map.set("age", 10);

console.log(map['name']);