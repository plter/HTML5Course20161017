/**
 * Created by plter on 10/18/16.
 */

(function () {

    var rect = $(".rect");

    // rect.click(function () {
    //     rect.animate({width: "0"}, 1000, function () {
    //         $(this).hide();
    //     });
    // });

    var visible = true;

    $("#btn-show").click(function () {
        visible = !visible;

        if (visible) {
            rect.animate({width: "100%", height: "100px"});
        } else {
            rect.animate({width: "0", height: "0"});
        }
    });

    // $("#btn-show").click(function () {
    //     rect.animate({backgroundColor: "green"});
    //     // console.log(">>>");
    // });

})();