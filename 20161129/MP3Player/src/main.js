/**
 * Created by plter on 2016/11/29.
 */

var List = require("./List");

(function () {

    var playlistContainer;
    var playlist;

    /**
     * 生成播放列表
     */
    function generatePlaylist(files) {
        // var list = "<ul>";
        //
        // for (var i = 0; i < files.length; i++) {
        //     list += "<li>" + files[i].name + "</li>";
        // }
        // list += "</ul>";
        //
        // playlistContainer.html(list);

        playlist.addFiles(files);
    }

    function addListeners() {
        $(document).on("dragover", function (e) {
            e.preventDefault();
        }).on("drop", function (e) {
            e.preventDefault();

            generatePlaylist(e.originalEvent.dataTransfer.files);
        });
    }

    function buildUI() {
        playlistContainer = $("#playlist-container");
        playlist = new List();
        playlistContainer.append(playlist.getHtmlNode());
    }

    function init() {
        buildUI();
        addListeners();
    }

    init();
})();