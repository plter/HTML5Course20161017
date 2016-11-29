/**
 * Created by plter on 2016/11/29.
 */

var List = require("./List");
require("./extensions");
var ListItem = require("./ListItem");
var Lrc = require("./Lrc");
var PlayerController = require("./PlayerController");

(function () {

    var playlistContainer;
    var playlist;
    var player;
    var playerController;
    var lrcContainer;

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

    function playMp3(item) {
        playerController.playItem(item);
    }


    function addListeners() {
        $(document).on("dragover", function (e) {
            e.preventDefault();
        }).on("drop", function (e) {
            e.preventDefault();

            var files = e.originalEvent.dataTransfer.files;
            var file;
            for (var i = 0; i < files.length; i++) {
                file = files[i];

                switch (file.getExtension()) {
                    case "mp3":
                        playlist.addItem(new ListItem(file));
                        break;
                    case "lrc":
                        (function (item, file) {
                            if (item) {
                                var reader = new FileReader();
                                reader.onload = function () {
                                    item.bindLrc(new Lrc(reader.result));
                                };
                                reader.readAsText(file);
                            }
                        })(playlist.getItemByNameWithoutExtension(file.getNameWithoutExtension()), file);
                        break;
                }
            }


            // generatePlaylist(e.originalEvent.dataTransfer.files);
        });

        playlist.onSelectItem = function (item) {
            playMp3(item);
        }
    }

    function buildUI() {
        playlistContainer = $("#playlist-container");
        playlist = new List();
        playlistContainer.append(playlist.getHtmlNode());
        player = document.querySelector("#player");
        lrcContainer = document.querySelector("#lrc-container");
        playerController = new PlayerController(player, lrcContainer);
    }

    function init() {
        buildUI();
        addListeners();
    }

    init();
})();