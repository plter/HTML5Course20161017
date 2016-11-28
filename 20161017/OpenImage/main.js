/**
 * Created by plter on 10/17/16.
 */


(function () {

    var fileField = $("#filefield");
    var btnBrowse = $("#btn-browse");

    function showImage(file) {
        var reader = new FileReader();
        reader.onload = function () {
            $("#container").html("<img src='" + reader.result + "'>");
        };
        reader.readAsDataURL(file);
    }

    btnBrowse.click(function () {
        fileField.click();
    });

    fileField.change(function () {
        showImage(this.files[0]);

        // console.log(this.files);
    });

})();