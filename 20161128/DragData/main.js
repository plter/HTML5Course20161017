/**
 * Created by plter on 2016/11/28.
 */

(function () {

    var contents;
    var rects;

    function findElements() {
        contents = document.querySelectorAll(".content");
        rects = document.querySelectorAll(".rect");
    }

    function addListeners() {
        var i = 0;
        for (i = 0; i < contents.length; i++) {
            contents[i].addEventListener("dragstart", function (e) {
                e.dataTransfer.setData("text/plain", this.id);
            });
        }

        for (i = 0; i < rects.length; i++) {
            var item = rects[i];
            item.addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            item.addEventListener("drop", function (e) {
                e.preventDefault();
                e.stopPropagation();

                var currentDraggingElement = document.getElementById(e.dataTransfer.getData("text/plain"));
                if (currentDraggingElement) {
                    if (currentDraggingElement.parentNode) {
                        currentDraggingElement.parentNode.removeChild(currentDraggingElement);
                        this.appendChild(currentDraggingElement);
                    }
                }
            });
        }
    }


    function init() {
        findElements();
        addListeners();
    }

    init();
})();