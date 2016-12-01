/**
 * Created by plter on 2016/12/1.
 */
var ucai;
(function (ucai) {
    var FileListItem = (function () {
        function FileListItem(file) {
            this._file = file;
            this._htmlNode = document.createElement("li");
            this._htmlNode.innerHTML = file.name;
        }
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