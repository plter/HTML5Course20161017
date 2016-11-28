/**
 * Created by plter on 2016/10/28.
 */

(function () {


    var video = document.getElementById("video");
    var canvas = document.getElementById("canvas");
    var context2d = canvas.getContext("2d");

    function render() {
        context2d.drawImage(video, 0, 0, 400, 300);

        requestAnimationFrame(render);
    }

    render();

})();