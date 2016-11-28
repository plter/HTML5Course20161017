/**
 * Created by plter on 10/20/16.
 */

(function () {

    $.get("/data").done(function (data) {
        console.log(data);
    });

})();