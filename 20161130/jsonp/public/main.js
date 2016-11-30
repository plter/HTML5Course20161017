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


    window.__ucai__callback__id = 0;
    function loadData(url, params, callback) {
        window.__ucai__callback__id++;
        var callbackFunctionName = "callback" + window.__ucai__callback__id;
        window[callbackFunctionName] = callback;
        url += "?callback=" + callbackFunctionName;
        for (var k in params) {
            url += "&" + k + "=" + params[k];
        }

        var script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
    }

    loadData("http://localhost:3000/data", {name: "ucai"}, function (data) {
        console.log(data);
    });

    loadData("http://localhost:3000/data", {name: "ZhangSan"}, function (data) {
        console.log(data);
    });
})();