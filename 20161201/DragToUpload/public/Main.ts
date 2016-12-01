///<reference path="../node_modules/@types/jquery/index.d.ts"/>
/**
 * Created by plter on 2016/12/1.
 */

//声明命名空间
namespace ucai {

    //声明类
    class Main {

        private dropArea: JQuery;
        private list: FileList;
        private btnUploadAll: JQuery;

        constructor() {
            this.getElements();
            this.buildUI();
            this.addListeners();
        }

        private buildUI() {
            this.list = new FileList();
            this.dropArea.append(this.list.htmlNode);
        }

        private addListeners() {
            this.dropArea.on("dragover", e => e.preventDefault());
            this.dropArea.on("drop", e => {
                e.preventDefault();
                let de = e.originalEvent as DragEvent;

                this.list.clear();
                this.list.addFiles(de.dataTransfer.files);
            });

            this.btnUploadAll.click(e => this.list.uploadAll());
        }

        private getElements() {
            this.dropArea = $("#drop-area");
            this.btnUploadAll = $("#btn-upload-all");
        }
    }

    new Main();
}