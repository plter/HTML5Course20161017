/**
 * Created by plter on 10/19/16.
 */

(function () {

    // function hello() {
    //     console.log("Hello " + this.name);
    // }

    //
    // hello();

    // setTimeout(function () {
    //     console.log(this);
    // }, 1000);

    // var student = {name: "ucai"};

    // hello.call(student);
    // hello.apply(student);


    function Student(name) {
        this.name = name;
    }

    Student.prototype.sayHello = function () {
        console.log(this.name + " say hello");
    };

    Student.prototype.sayHelloDelayed = function () {
        // setTimeout(function () {
        //     this.sayHello();
        // }.bind(this), 1000);

        // var self = this;
        // setTimeout(function () {
        //     self.sayHello();
        // }, 1000);

        (function (self) {
            setTimeout(function () {
                self.sayHello();
            }, 1000);
        })(this);
    };


    var s = new Student("张三");
    // s.sayHello();
    // s.sayHello.call("Hello");
    s.sayHelloDelayed();

})();