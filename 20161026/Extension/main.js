/**
 * Created by plter on 10/26/16.
 */


(function () {

    String.prototype.addUnderline = function () {
        return this.split("").join("_");
    };

    var str = "Hello World";

    // function addUnderline(str) {
    //     return str.split("").join("_");
    // }
    //
    // console.log(addUnderline(str));

    console.log(str.addUnderline());
})();