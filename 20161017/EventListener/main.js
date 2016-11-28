/**
 * Created by plter on 10/17/16.
 */

(function () {

    var div = $("#div");

    // div.on("click", function (e) {
    //     alert("div clicked");
    //
    //     div.off("click");
    // });

    // function clickHandler1(e) {
    //     console.log("Clicked 1");
    //
    //     div.off("click", clickHandler1);
    //     // div.off("click");
    // }
    //
    // function clickHandler2(e) {
    //     console.log("Clicked 2");
    // }
    //
    // div.on("click", clickHandler1);
    // div.on("click", clickHandler2);

    // div.one("click", function (e) {
    //     console.log("div clicked");
    // });


    // div.on("click", {str: "Hello"}, function (e) {
    //     console.log(e.data);
    // });

    div.on("customEvent", function (e, extraData) {
        // console.log(e);
        console.log(extraData);
    });
    // div.trigger("customEvent");
    div.trigger("customEvent", "Hello");
    // div.trigger($.Event("customEvent"));

})();