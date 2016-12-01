/**
 * Created by plter on 2016/12/1.
 */
var ucai;
(function (ucai) {
    var FileListItem = (function () {
        function FileListItem(file) {
            this._file = file;
            this._htmlNode = document.createElement("li");
            this._jQuery = $(this._htmlNode);
            this._jQuery.html("\n<div style='display: flex;'>\n    <div style=\"flex: 1;\">" + this._file.name + "</div>\n    <div class=\"progress\" style=\"width: 200px\">\n        <div class=\"progress-bar\"></div>\n    </div>\n</div>");
            this._progressBar = this._jQuery.find(".progress-bar");
        }
        FileListItem.prototype.startUpload = function () {
            var _this = this;
            var xhr = new XMLHttpRequest();
            xhr.upload.onprogress = function (e) { return _this.setProgress(e.loaded, e.total); };
            xhr.open("POST", "/upload");
            var fd = new FormData();
            fd.append("file", this._file);
            xhr.send(fd);
        };
        /**
         * 设置进度条的值，进度条将根据传入的当前值和最大值自动计算内容色块的宽度
         * @param value 当前的值
         * @param max 最大值
         */
        FileListItem.prototype.setProgress = function (value, max) {
            var widthValue = Math.round(value / max * 100);
            this._progressBar.css("width", widthValue + "%");
        };
        Object.defineProperty(FileListItem.prototype, "htmlNode", {
            get: function () {
                return this._htmlNode;
            },
            enumerable: true,
            configurable: true
        });
        return FileListItem;
    }());
    ucai.FileListItem = FileListItem;
})(ucai || (ucai = {}));
//# sourceMappingURL=FileListItem.js.map