/**
 * Created by plter on 2016/12/1.
 */

namespace ucai {

    export class FileList {

        private _fileListItems = [];
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
            let item = new FileListItem(file);
            this._fileListItems.push(item);
            this.htmlNode.appendChild(item.htmlNode);
        }

        public clear() {
            this._fileListItems = [];
            this._htmlNode.innerHTML = "";
        }

        public uploadAll() {
            this._fileListItems.forEach(item => item.startUpload());
        }

        public get htmlNode(): HTMLUListElement {
            return this._htmlNode;
        }
    }
}