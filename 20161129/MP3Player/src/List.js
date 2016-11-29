/**
 * Created by plter on 2016/11/29.
 */


function List() {
    this._htmlNode = document.createElement("ul");
    this._mp3Files = [];
}

/**
 * 判断列表中是否已经拥有该文件
 * @param file
 * @returns {boolean}
 */
List.prototype.hasFile = function (file) {
    for (var i = 0; i < this._mp3Files.length; i++) {
        if (this._mp3Files[i].name == file.name) {
            return true;
        }
    }

    return false;
};

List.prototype.addFiles = function (files) {
    var li, file;
    for (var i = 0; i < files.length; i++) {
        file = files[i];

        if (!this.hasFile(file)) {
            li = document.createElement("li");
            li.innerHTML = files[i].name;
            this._htmlNode.appendChild(li);
            this._mp3Files.push(file);
        }
    }
};

List.prototype.getHtmlNode = function () {
    return this._htmlNode;
};

module.exports = List;