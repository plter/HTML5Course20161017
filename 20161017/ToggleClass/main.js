/**
 * Created by plter on 10/17/16.
 */

(function () {


    var divMain = $("#main");

    $("#btn-add-rect-class").click(function () {
        divMain.addClass("rect");
    });

    $("#btn-remove-rect-class").click(function () {
        divMain.removeClass("rect");
    });

    $("#btn-toggle-rect-class").click(function () {
        divMain.toggleClass("rect");
    });

    $("#btn-add-green-class").click(function () {
        divMain.addClass("green");
    });

    $("#btn-remove-green-class").click(function () {
        divMain.removeClass("green");
    });

    $("#btn-toggle-green-class").click(function () {
        divMain.toggleClass("green");
    });
})();