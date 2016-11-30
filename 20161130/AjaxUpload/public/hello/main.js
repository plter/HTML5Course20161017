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
        xhr.open("GET", "/apis/hello?name=" + name);
        xhr.send();
    });

})();