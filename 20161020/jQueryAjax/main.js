/**
 * Created by plter on 10/20/16.
 */

(function () {

    // $.get("data.xml").done(function (data) {
    //     // console.log(data);
    //
    //     var students = data.getElementsByTagName("student");
    //
    //     console.log(students);
    // });
    // console.log("Hello");

    // $.get("data.json").done(function (data) {
    //     console.log(data.student);
    // });

    // $.getJSON("data.json").done(function (data) {
    //     console.log(data);
    // });

    $.getScript("script.js").done(function () {
        var s = new Student("ucai");
        s.sayHello();

        showMessageDialog("Hello World");
    }).fail(function (err) {
        console.log(err);
        alert("加载脚本失败");
    });

})();