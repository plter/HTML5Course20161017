/**
 * Created by plter on 2016/12/4.
 */

(function () {

    var form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            alert("上传成功");
        };
        xhr.open("POST", "/apis/upload");
        xhr.send(new FormData(this));
    });

})();