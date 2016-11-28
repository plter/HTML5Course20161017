/**
 * Created by plter on 10/25/16.
 */

window.ucai = window.ucai || {};

(function () {
    function List(files) {
        this._files = files;
        this._htmlNode = document.createElement("ul");

        for (var i = 0; i < this._files.length; i++) {
            this.addItem(new ucai.ListItem(this._files[i]));
        }

        $(this._htmlNode).menu();
    }

    var p = List.prototype;

    p.addItem = function (item) {
        this.htmlNode.appendChild(item.htmlNode);

        var self = this;
        item.onSelectFile = function (file) {
            if (self.onSelectFile) {
                self.onSelectFile(file);
            }
        };
    };

    Object.defineProperty(p, "htmlNode", {
        get: function () {
            return this._htmlNode;
        }
    });


    ucai.List = List;
})();