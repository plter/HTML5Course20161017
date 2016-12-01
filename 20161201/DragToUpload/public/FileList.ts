/**
 * Created by plter on 2016/12/1.
 */

namespace ucai {

    export class FileList {

        private _files = [];
        private _htmlNode: HTMLUListElement;

        constructor() {
            this._htmlNode = document.createElement("ul");
        }

        public addFiles(files) {
            for (let i = 0; i < files.length; i++) {
                this.addFile(files[i]);
            }
        }

        public addFile(file) {
            this._files.push(file);
            this.htmlNode.appendChild(new FileListItem(file).htmlNode);
        }

        public clear() {
            this._files = [];
            this._htmlNode.innerHTML = "";
        }

        public get htmlNode(): HTMLUListElement {
            return this._htmlNode;
        }
    }
}