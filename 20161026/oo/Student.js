/**
 * Created by plter on 10/26/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     * @class Student
     * @param name
     * @param age
     * @param gender
     * @constructor Student
     */
    function Student(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    Student.prototype.sayHello = function () {
        console.log(this._name + " say hello");
    };

    // Object.defineProperty(Student.prototype, "name", {
    //     get: function () {
    //         return this._name;
    //     },
    //     set: function (value) {
    //         this._name = value;
    //     }
    // });

    Object.defineProperties(Student.prototype, {
        name: {
            set: function (value) {
                this._name = value;
            },
            get: function () {
                return this._name;
            }
        },
        age: {
            set: function (value) {
                this._age = value;
            },
            get: function () {
                return this._age;
            }
        },
        gender: {
            get: function () {
                return this._gender;
            }
        }
    });

    ucai.Student = Student;
})();