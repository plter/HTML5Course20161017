/**
 * Created by plter on 2016/12/5.
 */

(function () {

    $("form").submit(function (e) {
        e.preventDefault();

        var pass = this['pass'].value;
        var passConfirm = this['pass-confirm'].value;

        if (pass != passConfirm) {
            ucai.showAlert("确认密码不一致");
            return;
        }

        ucai.hideAlert();

        $.post("/apis/users/register", {
            user: this["user"].value,
            pass: md5(this['pass'].value)
        }).done(function (data) {
            console.log(data);

            switch (data.code) {
                case 1:
                    ucai.showAlert("注册成功", "alert-success");
                    break;
                case 1062:
                    ucai.showAlert("用户名已被占用");
                    break;
                default:
                    alert("注册失败");
                    break;

            }
        }).fail(function (err) {
            ucai.showAlert("无法连接服务器");
        });

    });

})();