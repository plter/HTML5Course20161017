/**
 * Created by plter on 10/27/16.
 */

(function () {

    $.get("http://localhost:3000/data").done(function (data) {
        console.log(data);
    });

})();