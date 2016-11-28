/**
 * Created by plter on 10/25/16.
 */

(function () {

    var fileField, btnBrowse, listContainer, photoContainer;

    function renderUI() {
        fileField = $("#file-field");
        btnBrowse = $("#btn-browse");
        listContainer = $("#list-container");
        photoContainer = $("#photo-container");

        $(".btn").button();
    }

    function readAndShowPhoto(file) {
        var reader = new FileReader();
        reader.onload = function () {
            photoContainer.html("<img src='" + reader.result + "'>");
        };
        reader.readAsDataURL(file);
    }

    function addListeners() {
        btnBrowse.click(function () {
            fileField.click();
        });
        fileField.change(function () {
            var list = new ucai.List(this.files);
            listContainer.empty().append(list.htmlNode);
            list.onSelectFile = function (file) {
                readAndShowPhoto(file);
            }
        });
    }

    function init() {
        renderUI();
        addListeners();
    }

    init();

})();