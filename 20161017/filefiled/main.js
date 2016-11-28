/**
 * Created by plter on 10/17/16.
 */

(function () {


    function showImage(file) {
        var reader = new FileReader();
        reader.onload = function () {
            $("#container").html("<img src='" + reader.result + "'>");
        };
        reader.readAsDataURL(file);
    }

    // $("#browse-for-image").submit(function (e) {
    //     e.preventDefault();//阻止事件的默认行为
    //
    //     // console.log(e);
    //
    //     // var fileFiled = this["file"];
    //     // var file = fileFiled.files[0];
    //     //
    //     // // console.log(file);
    //     //
    //     // // console.log(this, this["file"]);
    //     //
    //     // showImage(file);
    // });

    $("#browse-for-image input[type='file']").change(function (e) {
        // console.log(e);

        showImage(this.files[0]);
    });

})();