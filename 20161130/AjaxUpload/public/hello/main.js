/**
 * Created by plter on 2016/11/30.
 */

(function () {

    var formUser = document.querySelector("#form-user");
    var resultDiv = document.querySelector("#result-div");

    formUser.addEventListener("submit", function (e) {
        e.preventDefault();

        var name = this["name"].value;

        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resultDiv.innerHTML = xhr.responseText;
        };

        //GET
        // xhr.open("GET", "/apis/hello?name=" + name);
        // xhr.send();

        //POST
        // xhr.open("POST", "/apis/hello");
        // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // xhr.send("name=" + name);

        //POST FormData
        xhr.open("POST", "/apis/hello");
        xhr.send(new FormData(this));
    });

})();