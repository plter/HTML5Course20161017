/**
 * Created by plter on 2016/12/7.
 */

(function () {

    // $.get("data.txt").done(function (data) {
    //     console.log(data);
    // }).fail(function (err) {
    //     console.log(err);
    // });

    // $.get("data.txt").done(function (data) {
    //     console.log(data);
    //
    //     $.get("data1.txt").done(function (data) {
    //         console.log(data);
    //
    //         $.get("data2.txt").done(function (data) {
    //             console.log(data);
    //         }).fail(function (err) {
    //             console.log(err);
    //         })
    //     }).fail(function (err) {
    //         console.log(err);
    //     });
    // }).fail(function (err) {
    //     console.log(err);
    // });

    function loadData(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onloadend = function (event) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(event);
                }
            };
            xhr.open("get", url);
            xhr.send();
        });
    }

    // loadData("data.txt").then(function (result) {
    //     console.log(result);
    //
    //     return loadData("data1.txt");
    // }).then(function (result) {
    //     console.log(result);
    //
    //     return loadData("data2.txt");
    // }).then(function (result) {
    //     console.log(result);
    // }).catch(function (error) {
    //     console.log(error);
    // });

    // Promise.all([
    //     loadData("data.txt"),
    //     loadData("data1.txt"),
    //     loadData("data2.txt")
    // ]).then(function (result) {
    //     console.log(result);
    // }).catch(function (err) {
    //     console.log(err);
    // });


    Promise.race([
        loadData("data.txt"),
        loadData("data1.txt"),
        loadData("data2.txt")
    ]).then(function (result) {
        console.log(result);
    }).catch(function (err) {
        console.log(err);
    });

    // new Promise(function (resolve, reject) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function () {
    //         resolve(xhr.responseText);
    //     };
    //     xhr.onerror = function (err) {
    //         reject(err);
    //     };
    //     xhr.open("get", "data.txt");
    //     xhr.send();
    // }).then(function (result) {
    //     console.log(result);
    // }).catch(function (error) {
    //     console.log(error);
    // });

})();