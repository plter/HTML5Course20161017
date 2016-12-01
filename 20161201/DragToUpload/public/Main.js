///<reference path="../node_modules/@types/jquery/index.d.ts"/>
/**
 * Created by plter on 2016/12/1.
 */
var ucai;
(function (ucai) {
    var Main = (function () {
        function Main() {
            this.getElements();
            this.buildUI();
            this.addListeners();
        }
        Main.prototype.buildUI = function () {
            this.list = new ucai.FileList();
            this.dropArea.append(this.list.htmlNode);
        };
        Main.prototype.addListeners = function () {
            var _this = this;
            this.dropArea.on("dragover", function (e) { return e.preventDefault(); });
            this.dropArea.on("drop", function (e) {
                e.preventDefault();
                var de = e.originalEvent;
                _this.list.clear();
                _this.list.addFiles(de.dataTransfer.files);
            });
        };
        Main.prototype.getElements = function () {
            this.dropArea = $("#drop-area");
        };
        return Main;
    }());
    new Main();
})(ucai || (ucai = {}));
//# sourceMappingURL=Main.js.map