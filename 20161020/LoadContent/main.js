/**
 * Created by plter on 10/20/16.
 */


(function () {

    $("#container").load("content1.htm", function (result, status) {
        // console.log(arguments);

        if (status == "error") {
            $(this).html("加载内容失败");
        }
    });

})();