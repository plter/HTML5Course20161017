/**
 * Created by plter on 2016/11/28.
 */

(function () {

    var obj = document.querySelector("#div-drag-me");
    var currentDraggedElement;
    var targetArea = document.querySelector("#target");

    targetArea.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    targetArea.addEventListener("drop", function (e) {
        console.log(e);

        console.log(currentDraggedElement);

        if (currentDraggedElement.parentNode) {
            currentDraggedElement.parentNode.removeChild(currentDraggedElement);
            this.appendChild(currentDraggedElement);
        }

    });

    obj.addEventListener("dragstart", function (e) {
        console.log(e);
        currentDraggedElement = this;
    });

})();