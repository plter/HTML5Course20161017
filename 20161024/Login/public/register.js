/**
 * Created by plter on 10/24/16.
 */

(function () {

    // $.post("/api/register").done(function (data) {
    //     console.log(data);
    // });

    $("#register-form").submit(function (e) {
        e.preventDefault();

        var self = this;
        var jqSelf = $(self);
        var mainAlert = jqSelf.find(".main-alert");

        var pass = this["pass"].value;
        var passConfirm = this["pass-confirm"].value;

        if (pass != passConfirm) {
            $(this).find(".pass-confirm").html("确认密码不一致");
            return;
        }

        var user = this["user"].value;

        mainAlert.html("正在连接服务器...");
        $.post("/api/register", {user: user, pass: pass}).done(function (data) {
            console.log(data);
            switch (data.status) {
                case 1:
                    mainAlert.html("注册成功");
                    break;
                case 4:
                    mainAlert.html("该用户名已经被占用");
                    break;
                default:
                    mainAlert.html("未知错误");
                    break;
            }
        }).fail(function () {
            mainAlert.html("无法连接服务器");
        });
    });

})();