/**
 * Created by plter on 2016/11/28.
 */

(function () {

    var currentElement;

    $(".content").on("dragstart", function (e) {
        currentElement = this;

        console.log(currentElement);
    });

    $(".rect").on("dragover", function (e) {
        e.preventDefault();
    }).on("drop", function (e) {
        e.preventDefault();

        if (currentElement && currentElement.parentNode) {
            currentElement.parentNode.removeChild(currentElement);
        }
        this.appendChild(currentElement);
    });

})();