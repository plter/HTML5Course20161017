/**
 * Created by plter on 2016/11/30.
 */

(function () {

    var resultDiv = document.querySelector("#result-div");
    var fileForm = document.querySelector("#file-form");
    var progressDiv = document.querySelector("#progress-div");

    fileForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function (event) {
            // console.log(event);
            progressDiv.innerHTML = Math.round(event.loaded / event.total * 100) + "%";
        };
        xhr.onload = function () {
            console.log(xhr.responseText);

            resultDiv.innerHTML = "<video controls='controls' src='/" + xhr.responseText + "'></video>";
            // resultDiv.innerHTML = "<img src='/" + xhr.responseText + "'>";
        };
        xhr.open("POST", "/apis/upload");
        xhr.send(new FormData(this));
    });

})();