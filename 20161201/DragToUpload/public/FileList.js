/**
 * Created by plter on 2016/12/1.
 */
var ucai;
(function (ucai) {
    var FileList = (function () {
        function FileList() {
            this._fileListItems = [];
            this._htmlNode = document.createElement("ul");
        }
        FileList.prototype.addFiles = function (files) {
            for (var i = 0; i < files.length; i++) {
                this.addFile(files[i]);
            }
        };
        FileList.prototype.addFile = function (file) {
            var item = new ucai.FileListItem(file);
            this._fileListItems.push(item);
            this.htmlNode.appendChild(item.htmlNode);
        };
        FileList.prototype.clear = function () {
            this._fileListItems = [];
            this._htmlNode.innerHTML = "";
        };
        FileList.prototype.uploadAll = function () {
            this._fileListItems.forEach(function (item) { return item.startUpload(); });
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