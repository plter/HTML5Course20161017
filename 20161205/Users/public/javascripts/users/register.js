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


    });

})();