/**
 * Created by plter on 2016/12/1.
 */
var ucai;
(function (ucai) {
    var FileList = (function () {
        function FileList() {
            this._files = [];
            this._htmlNode = document.createElement("ul");
        }
        FileList.prototype.addFiles = function (files) {
            for (var i = 0; i < files.length; i++) {
                this.addFile(files[i]);
            }
        };
        FileList.prototype.addFile = function (file) {
            this._files.push(file);
            this.htmlNode.appendChild(new ucai.FileListItem(file).htmlNode);
        };
        FileList.prototype.clear = function () {
            this._files = [];
            this._htmlNode.innerHTML = "";
        };
        Object.defineProperty(FileList.prototype, "htmlNode", {
            get: function () {
                return this._htmlNode;
            },
            enumerable: true,
            configurable: true
        });
        return FileList;
    }());
    ucai.FileList = FileList;
})(ucai || (ucai = {}));
//# sourceMappingURL=FileList.js.map