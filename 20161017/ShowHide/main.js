/**
 * Created by plter on 10/17/16.
 */

(function () {

    var div = $("div");

    // function startToggle() {
    //     div.toggle("slow", startToggle);
    // }

    // startToggle();

    // var visible = true;

    $("#btnShowOrHide").click(function () {

        div.toggle("slow");

        // visible = !visible;
        //
        // if (visible) {
        //     // div.show("slow", function () {
        //     //     alert("div已经完全呈现");
        //     // });
        //
        //     div.show({
        //         duration: "slow", complete: function () {
        //             alert("div已经完全呈现");
        //         },
        //         easing: "linear"
        //     });
        // } else {
        //     div.hide("slow");
        // }
    });

})();