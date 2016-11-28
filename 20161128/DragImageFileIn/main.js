/**
 * Created by plter on 2016/11/28.
 */

(function () {

    var area = $("#area");

    function readAsText(file) {
        var reader = new FileReader();
        reader.onload = function () {
            area.html(reader.result);
        };
        reader.readAsText(file);
    }

    function readAsImage(file) {
        var reader = new FileReader();
        reader.onload = function () {
            area.html("<img src='" + reader.result + "' width='200'>");
        };
        reader.readAsDataURL(file);
    }


    area.on("dragover", function (e) {
        e.preventDefault();
    }).on("drop", function (e) {
        e.preventDefault();
        var self = this;

        var files = e.originalEvent.dataTransfer.files;
        if (files && files.length) {
            var firstFile = files[0];
            console.log(firstFile);

            switch (firstFile.type) {
                case "image/jpeg":
                case "image/png":
                    readAsImage(firstFile);
                    break;
                case "text/plain":
                    readAsText(firstFile);
                    break;
            }
        }
    });

})();