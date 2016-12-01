/**
 * Created by plter on 2016/12/1.
 */

namespace ucai {
    export class FileListItem {

        private _file: File;
        private _htmlNode: HTMLLIElement;
        private _jQuery: JQuery;
        private _progressBar: JQuery;

        constructor(file: File) {
            this._file = file;
            this._htmlNode = document.createElement("li");
            this._jQuery = $(this._htmlNode);
            this._jQuery.html(`
<div style='display: flex;'>
    <div style="flex: 1;">${this._file.name}</div>
    <div class="progress" style="width: 200px">
        <div class="progress-bar"></div>
    </div>
</div>`);

            this._progressBar = this._jQuery.find(".progress-bar");
        }

        public startUpload() {
            let xhr = new XMLHttpRequest();
            xhr.upload.onprogress = e => this.setProgress(e.loaded, e.total);
            xhr.open("POST", "/upload");

            let fd = new FormData();
            fd.append("file", this._file);
            xhr.send(fd);
        }

        /**
         * 设置进度条的值，进度条将根据传入的当前值和最大值自动计算内容色块的宽度
         * @param value 当前的值
         * @param max 最大值
         */
        private setProgress(value: number, max: number): void {
            let widthValue = Math.round(value / max * 100);
            this._progressBar.css("width", widthValue + "%");
        }


        get htmlNode(): HTMLLIElement {
            return this._htmlNode;
        }
    }
}