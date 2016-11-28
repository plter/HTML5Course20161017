/**
 * Created by plter on 10/20/16.
 */


(function () {

    function Student(name) {
        this._name = name;
    }

    Student.prototype.sayHello = function () {
        console.log("Hello " + this._name);
    };

    window.Student = Student;


    window.showMessageDialog = function (msg) {
        alert(msg);
    }
})();