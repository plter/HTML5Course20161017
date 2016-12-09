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

    $(".btn-delete").click(function (e) {
        e.preventDefault();

        $.get(this.href).done(function (data) {
            console.log(data);

            if (data.code == 1) {
                location.reload();
            } else {
                alert("删除失败");
            }
        });
    });

    $(".form-user").submit(function (e) {
        e.preventDefault();

        $.post("/update", {
            id: this['id'].value,
            user: this['user'].value,
            age: this['age'].value
        }).done(function (data) {
            console.log(data);

            if (data.code == 1) {
                alert("保存成功");
            } else {
                alert("保存失败");
            }
        });
    });

})();