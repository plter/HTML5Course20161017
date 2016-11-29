/**
 * Created by plter on 2016/11/29.
 */

function ListItem(file) {
    this._file = file;

    this._htmlNode = document.createElement("li");
    this._htmlNode.className = "list-item";
    this._htmlNode.innerHTML = this._file.name;

    var self = this;
    this._htmlNode.onclick = function () {
        if (self.onSelect) {
            self.onSelect(self);
        }
    }
}

ListItem.prototype.getHtmlNode = function () {
    return this._htmlNode;
};

ListItem.prototype.getFile = function () {
    return this._file;
};

module.exports = ListItem;
