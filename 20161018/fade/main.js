/**
 * Created by plter on 10/18/16.
 */


(function () {

    var rect = $(".rect");

    // rect.click(function () {
    //     // $(this).fadeOut(500);
    //
    //     $(this).slideUp("slow");
    // });
    //
    $("#btn-show-rect").click(function () {
        // rect.fadeIn(500);
        // rect.fadeToggle("slow");
        // rect.slideDown();

        rect.slideToggle();
    });

    // rect.click(function () {
    //     $(this).fadeTo("slow", 0.3);
    // });

})();