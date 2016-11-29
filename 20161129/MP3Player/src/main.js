/**
 * Created by plter on 2016/11/29.
 */

var List = require("./List");

(function () {

    var playlistContainer;
    var playlist;
    var player;

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

    function playMp3(file) {
        var reader = new FileReader();
        reader.onload = function () {
            player.src = reader.result;
        };
        reader.readAsDataURL(file);
    }


    function addListeners() {
        $(document).on("dragover", function (e) {
            e.preventDefault();
        }).on("drop", function (e) {
            e.preventDefault();

            generatePlaylist(e.originalEvent.dataTransfer.files);
        });

        playlist.onSelectItem = function (item) {
            playMp3(item.getFile());
        }
    }

    function buildUI() {
        playlistContainer = $("#playlist-container");
        playlist = new List();
        playlistContainer.append(playlist.getHtmlNode());
        player = document.querySelector("#player");
    }

    function init() {
        buildUI();
        addListeners();
    }

    init();
})();