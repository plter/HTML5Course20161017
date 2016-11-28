/**
 * Created by plter on 10/19/16.
 */

// function clickedHandler() {
//     alert("Button clicked");
// }

(function () {

    // var btn = document.querySelector("#btn");
    //
    // btn.onclick = function () {
    //     alert("Button clicked");
    // };


    var rect = document.querySelector("#rect");
    // rect.ontouchstart = function () {
    //     alert("rect touched");
    // };
    rect.addEventListener("touchstart", function (e) {
        alert("rect touched");
    });
})();