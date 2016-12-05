/**
 * Created by plter on 2016/12/5.
 */

(function () {

    $("form").submit(function (e) {
        e.preventDefault();

        $.post("/apis/users/update", {
            id: this['id'].value,
            user: this['user'].value,
            age: this['age'].value
        }).done(function (data) {
            console.log(data);
            switch (data.code) {
                case 1:
                    ucai.showAlert("更新信息成功", "alert-success");
                    break;
                default:
                    ucai.showAlert("更新信息失败");
                    break;
            }
        }).fail(function (err) {
            ucai.showAlert("无法连接服务器");
        });
    });

})();