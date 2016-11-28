/**
 * Created by plter on 10/20/16.
 */

(function () {

    $.fn.setContextMenu = function (jqMenu) {
        $(document).click(function () {
            jqMenu.hide();
        });
        $(document).contextmenu(function () {
            jqMenu.hide();
        });

        jqMenu.contextmenu(function (e) {
            e.preventDefault();
        });

        this.contextmenu(function (e) {
            e.preventDefault();
            e.stopPropagation();

            jqMenu.show();

            jqMenu.css({left: e.clientX + "px", top: e.clientY + "px"});
        });
    }

})();