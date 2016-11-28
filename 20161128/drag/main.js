/**
 * Created by plter on 2016/11/28.
 */

(function () {

    var contents;
    var currentDraggedElement;
    var rects;

    function findElements() {
        contents = document.querySelectorAll(".content");
        rects = document.querySelectorAll(".rect");
    }

    function addListeners() {
        var i = 0;
        for (i = 0; i < contents.length; i++) {
            contents[i].addEventListener("dragstart", function (e) {
                currentDraggedElement = this;
            });
        }

        for (i = 0; i < rects.length; i++) {
            var item = rects[i];
            item.addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            item.addEventListener("drop", function (e) {
                if (currentDraggedElement) {
                    if (currentDraggedElement.parentNode) {
                        currentDraggedElement.parentNode.removeChild(currentDraggedElement);
                        this.appendChild(currentDraggedElement);
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