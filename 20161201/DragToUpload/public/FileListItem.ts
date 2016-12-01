/**
 * Created by plter on 2016/12/1.
 */

namespace ucai {
    export class FileListItem {

        private _file: File;
        private _htmlNode: HTMLLIElement;

        constructor(file: File) {
            this._file = file;
            this._htmlNode = document.createElement("li");
            this._htmlNode.innerHTML = file.name;
        }

        get htmlNode(): HTMLLIElement {
            return this._htmlNode;
        }
    }
}