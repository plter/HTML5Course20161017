/**
 * Created by plter on 10/21/16.
 */

(function () {


    // $.get("http://localhost:3000/data").done(function (data) {
    //
    //     console.log(data);
    // });

    $.ajax({
        url: "http://localhost:3000/data",
        type: "GET",
        dataType: "jsonp"
    }).done(function (data) {
        console.log(data);
    });

})();