/**
 * Created by plter on 2016/10/28.
 */

(function () {

    // var str = "Hello 100 201 502 1000World";
    // var p = /\d{3}/g;//匹配一个数字
    // var p = /\d/;//匹配一位数字，相当于/[0123456789]/
    // var result = p.exec(str);
    // console.log(result);

    // var result;
    // while (result = p.exec(str)) {
    //     console.log(result);
    // }

    // var str = "aa@aacom"
    // var p = /\w+@\w+\.\w+/;
    // console.log(p.test(str));

    var idNumber = "张三的身份证号：12345619900618678X，性别：男";

    var p = /\d{6}(\d{4})(\d{2})(\d{2})\d{3}[\dX]/;

    var result = p.exec(idNumber);

    console.log(result);

    if (result) {
        console.log("生日：" + result[1] + "-" + result[2] + "-" + result[3]);
    }

})();