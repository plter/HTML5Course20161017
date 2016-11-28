/**
 * Created by plter on 10/24/16.
 */

(function () {

    $("#login-form").submit(function (e) {
        e.preventDefault();

        var mainAlert = $(this).find(".main-alert");

        mainAlert.html("正在连接服务器...");
        $.post("/api/login", {user: this['user'].value, pass: this["pass"].value}).done(function (data) {
            switch (data.status) {
                case 1:
                    mainAlert.html("登陆成功");
                    break;
                case 5:
                case 6:
                    mainAlert.html("帐号或者密码错误");
                    break;
                default:
                    mainAlert.html("未知错误");
                    break;
            }
        });
    });

})();