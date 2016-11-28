/**
 * Created by plter on 2016/10/28.
 */

(function () {

    var div = document.getElementById("mydiv");

    div.onclick = function () {


        // if (div.requestFullscreen) {
        //     div.requestFullscreen();
        // } else if (div.webkitRequestFullscreen) {
        //     div.webkitRequestFullscreen();
        // }

        div.requestFullscreen = div.requestFullscreen ||
            div.webkitRequestFullscreen ||
            div.mozRequestFullScreen ||
            div.msRequestFullscreen;

        // console.log(div.requestFullscreen,div);
        div.requestFullscreen();
    };

})();