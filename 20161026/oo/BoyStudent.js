/**
 * Created by plter on 10/26/16.
 */


window.ucai = window.ucai || {};

(function () {

    /**
     * @extends Student
     * @class BoyStudent
     * @param name
     * @param age
     * @constructor
     */
    function BoyStudent(name, age) {
        ucai.Student.call(this, name, age, "male");
    }

    var p = BoyStudent.prototype = new ucai.Student();

    p.sayHello = function () {

        //执行Student类中的sayHello函数
        ucai.Student.prototype.sayHello.call(this);

        console.log("男学生 " + this.name + " 说：你好");
    };


    ucai.BoyStudent = BoyStudent;
})();