/**
 * Created by plter on 2016/11/28.
 */

(function () {

    var lrcObject = {};
    var player = document.querySelector("audio");
    var lrcDiv = $("#lrc-div");

    $.get("song.lrc").done(function (data) {

        var p = /\[(\d{2}):(\d{2})\.\d{2}\](.*)/g;

        var result;

        while (result = p.exec(data)) {
            lrcObject[parseInt(result[1]) * 60 + parseInt(result[2])] = result[3];
        }
        console.log(lrcObject);
    });

    setInterval(function () {
        var sec = Math.round(player.currentTime);
        var content = lrcObject[sec];

        if (content) {
            lrcDiv.html(content);
        }
    }, 1000);

})();