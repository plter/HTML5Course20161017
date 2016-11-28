/**
 * Created by plter on 10/25/16.
 */

window.ucai = window.ucai || {};


(function () {

    function ListItem(file) {
        this._htmlNode = document.createElement("li");
        this._file = file;
        this._contentDiv = document.createElement("div");
        this._contentDiv.innerHTML = this._file.name;
        this._htmlNode.appendChild(this._contentDiv);
        var self = this;

        $(this._contentDiv).click(function () {
            if (self.onSelectFile) {
                self.onSelectFile(self._file);
            }
        });
    }

    var p = ListItem.prototype;

    Object.defineProperty(p, "htmlNode", {
        get: function () {
            return this._htmlNode;
        }
    });

    ucai.ListItem = ListItem;

})();