/**
 * Created by plter on 10/18/16.
 */


(function () {

    var vKeyboard = $("#vkeyboard");
    var btnHideKeyboard = $("#vkeyboard .btn-hide");
    var passwordInput = $("#password-input");

    passwordInput.click(function (e) {
        vKeyboard.show();
    }).keydown(function (e) {
        // console.log(e);
        e.preventDefault();
    });

    btnHideKeyboard.click(function (e) {
        vKeyboard.hide();
    });

    $(".key").click(function () {
        // console.log($(this).html());

        var keyCode = $(this).html();

        switch (keyCode) {
            case "Blank":
                keyCode = " ";
                break;
        }

        passwordInput[0].value += keyCode;//passwordInput[0]获取与该选择器匹配的第一个HTML元素
    });

    $("#vkeyboard .btn-clear").click(function () {
        passwordInput[0].value = "";
    });

    $("#vkeyboard .btn-delete").click(function () {
        var input = passwordInput[0];
        input.value = input.value.substring(0, input.value.length - 1);
    });

    $("form").submit(function (e) {
        e.preventDefault();//阻止该提交事件的默认行为
    });

})();