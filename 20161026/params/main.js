/**
 * Created by plter on 10/26/16.
 */

(function () {

    // function sayHello(name) {
    //     name = name || "ZhangSan";
    //     // if (!name) {
    //     //     name = "ZhangSan";
    //     // }
    //
    //     console.log(name + " say hello");
    // }
    //
    // sayHello("LiSi");

    Element.prototype.css = function () {
        var first, second;
        switch (arguments.length) {
            case 1:
                first = arguments[0];
                if (first && typeof first == "object") {
                    for (var k in first) {
                        this.css(k, first[k]);
                    }
                }
                break;
            case 2:
                first = arguments[0];
                second = arguments[1];
                if (typeof first == "string" && typeof second == "string") {
                    this.style[first] = second;
                } else {
                    throw new Error("Arguments error,if you send two params to this function,the two params must be strings");
                }
                break;
            default:
                throw new Error("Arguments error,this function must be sent two arguments");
        }
    };

    var rect = document.getElementById("rect");
    // rect.css("width", "100px");
    // rect.css("height", "100px");
    // rect.css("backgroundColor", "red");


    rect.css({
        width: "100px",
        height: "100px",
        backgroundColor: "blue"
    });

})();