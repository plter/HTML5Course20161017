/**
 * Created by plter on 2016/12/7.
 */

window.ucai = window.ucai || {};

(function () {

    function Hello() {

    }

    Hello.prototype.sayHello = function () {
        console.log("Hello World");
    };

    window.ucai.Hello = Hello;
})();