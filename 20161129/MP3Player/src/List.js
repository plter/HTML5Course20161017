/**
 * Created by plter on 2016/11/29.
 */

var ListItem = require("./ListItem");


function List() {
    this._htmlNode = document.createElement("ul");
    // this._mp3Files = [];
    this._items = {};
}


List.prototype.hasItem = function (item) {
    return this._items[item.getFile().getUriEncodedName()];
};

/**
 * 判断列表中是否已经拥有该文件
 * @param file
 * @returns {boolean}
 */
// List.prototype.hasFile = function (file) {
//     for (var i = 0; i < this._mp3Files.length; i++) {
//         if (this._mp3Files[i].name == file.name) {
//             return true;
//         }
//     }
//
//     return false;
// };

// List.prototype.addFiles = function (files) {
//     var li, file;
//     for (var i = 0; i < files.length; i++) {
//         file = files[i];
//
//         if (!this.hasFile(file)) {
//             li = document.createElement("li");
//             li.innerHTML = files[i].name;
//             this._htmlNode.appendChild(li);
//             this._mp3Files.push(file);
//         }
//     }
// };

List.prototype.addItem = function (item) {
    if (!this.hasItem(item)) {
        this._items[item.getFile().getUriEncodedName()] = item;
        this._htmlNode.appendChild(item.getHtmlNode());

        var self = this;
        item.onSelect = function (item) {
            if (self.onSelectItem) {
                self.onSelectItem(item);
            }
        }
    }
};

List.prototype.addFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        this.addItem(new ListItem(files[i]));
    }
};

List.prototype.getHtmlNode = function () {
    return this._htmlNode;
};

/**
 * 根据不带扩展名的文件名字获取该列表项
 * @param nameWithoutExtension
 */
List.prototype.getItemByNameWithoutExtension = function (nameWithoutExtension) {
    return this._items[encodeURI(nameWithoutExtension)];
};

module.exports = List;