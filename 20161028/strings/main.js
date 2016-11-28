/**
 * Created by plter on 2016/10/28.
 */


(function () {


    var paramString = "name=ucai&age=10&words=HelloWorld&name1=XiaoMing";
    // var paramArr = paramString.split("&");
    //
    // var obj = {};
    // for (var i = 0; i < paramArr.length; i++) {
    //     var params = paramArr[i];
    //     var kv = params.split("=");
    //     obj[kv[0]] = kv[1];
    // }
    // console.log(obj);

    // var startIndex = 0;
    // var obj = {};
    // while (true) {
    //     var equalSignIndex = paramString.indexOf("=", startIndex);
    //     var key = paramString.substring(startIndex, equalSignIndex);
    //     var endIndex = paramString.indexOf("&", equalSignIndex);
    //     if (endIndex > -1) {
    //         startIndex = endIndex + 1;
    //     } else {
    //         endIndex = paramString.length;
    //     }
    //
    //     var value = paramString.substring(equalSignIndex + 1, endIndex);
    //
    //     obj[key] = value;
    //
    //     if (endIndex == paramString.length) {
    //         break;
    //     }
    // }
    // console.log(obj);

    var obj = {};
    var char, currentStr = "", key, value;
    for (var i = 0; i < paramString.length; i++) {
        char = paramString.charAt(i);

        switch (char) {
            case "=":
                key = currentStr;
                currentStr = "";
                break;
            case "&":
                value = currentStr;
                obj[key] = value;
                currentStr = "";
                break;
            default:
                currentStr += char;
                break;
        }
    }
    value = currentStr;
    obj[key] = value;


    console.log(obj);
})();