/**
 * Created by plter on 2016/10/27.
 */

(function () {

    $.ajax({
        method: "POST",
        url: "/hello.json",
        data: JSON.stringify({user: "ZhangSan"}),
        contentType: "text/plain"
    }).done(function (data) {
        console.log(data);
    });
})();