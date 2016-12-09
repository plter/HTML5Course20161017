/**
 * Created by plter on 2016/12/9.
 */

(function () {

    $("#form-add-user").submit(function (e) {
        e.preventDefault();

        $.post("/adduser", {
            user: this['user'].value,
            age: this['age'].value
        }).done(function (data) {
            console.log(data);

            if (data.code == 1) {
                location.reload();
            } else {
                alert("添加用户失败");
            }
        }).fail(function (err) {
            alert("无法连接服务器");
        });
    });

})();