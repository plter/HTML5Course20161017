/**
 * Created by plter on 2016/12/5.
 */

(function () {

    $("form").submit(function (e) {
        e.preventDefault();

        $.post("/apis/users/login", {
            user: this['user'].value,
            pass: md5(this['pass'].value)
        }).done(function (data) {
            console.log(data);

            switch (data.code) {
                case 1:
                    location.href = "/users/profile";
                    break;
                case 10003:
                case 10004:
                    ucai.showAlert("用户名或者密码错误");
                    break;
                default:
                    ucai.showAlert("未知错误");
                    break;
            }
        }).fail(function (err) {
            ucai.showAlert("无法连接服务器");
        });
    });

})();