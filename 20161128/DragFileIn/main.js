/**
 * Created by plter on 2016/11/28.
 */

(function () {

    $("#area").on("dragover", function (e) {
        e.preventDefault();
    }).on("drop", function (e) {
        e.preventDefault();
        var self = this;

        var files = e.originalEvent.dataTransfer.files;
        if (files && files.length) {
            var first = files[0];

            console.log(first);

            var reader = new FileReader();
            reader.onload = function () {
                self.innerHTML = reader.result;
            };
            reader.readAsText(first);
        }
    });

})();