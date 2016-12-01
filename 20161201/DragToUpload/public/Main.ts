///<reference path="../node_modules/@types/jquery/index.d.ts"/>
/**
 * Created by plter on 2016/12/1.
 */

namespace ucai {
    class Main {

        private dropArea: JQuery;
        private list: FileList;

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
        }

        private getElements() {
            this.dropArea = $("#drop-area");
        }
    }

    new Main();
}