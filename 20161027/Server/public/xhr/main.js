/**
 * Created by plter on 10/27/16.
 */

(function () {


    // var xhr = new XMLHttpRequest();
    //
    // xhr.addEventListener("readystatechange", function (e) {
    //     console.log(xhr.readyState);
    //
    //     if (xhr.readyState == 4) {
    //         console.log(xhr.responseText);
    //
    //         console.log(JSON.parse(xhr.responseText));
    //     }
    // });
    //
    // xhr.addEventListener("load", function (e) {
    //     console.log(e, xhr);
    // });
    //
    // console.log(xhr.readyState);
    // xhr.open("GET", "/data");
    // xhr.send();

    var resultDiv = document.querySelector("#result");
    var form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            resultDiv.innerHTML = xhr.responseText;
        });

        //GET 方式
        // xhr.open("GET", "/hello?user=" + this['user'].value);
        // xhr.send();

        //POST 方式传URL参数
        // xhr.open("POST", "/hello");
        // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // xhr.send("user=" + this["user"].value);

        //POST 方式传原始字符串
        xhr.open("POST", '/hello.json');
        xhr.send(JSON.stringify({user: this["user"].value}));
    });
})();