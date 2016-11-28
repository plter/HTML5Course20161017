/**
 * Created by plter on 10/26/16.
 */

(function () {

    var s = new ucai.Student("ZhangSan", 10, "male");
    // s.sayHello();
    //
    // s.name = "Lisi";
    //
    // console.log(s.gender);

    var bs = new ucai.BoyStudent("ZhangSan", 10);
    bs.sayHello();
    // console.log(bs.gender);

    // console.log(s instanceof ucai.Student);
    // console.log(s.constructor == ucai.BoyStudent);

})();