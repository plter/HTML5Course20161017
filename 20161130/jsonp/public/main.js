/**
 * Created by plter on 2016/11/30.
 */

(function () {

    // function callback(data) {
    //     console.log(data);
    // }
    //
    // window.callback = callback;
    //
    // function getData() {
    //     var script = document.createElement("script");
    //     script.src = "http://localhost:3000/data";
    //     document.body.appendChild(script);
    // }
    //
    // getData();


    function loadData(url, callback) {
        window.callback = callback;

        var script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
    }

    loadData("http://localhost:3000/data?name=ucai", function (data) {
        console.log(data);
    });
})();