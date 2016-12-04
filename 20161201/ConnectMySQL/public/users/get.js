/**
 * Created by plter on 2016/12/1.
 */
(function () {

    $("#form-add-user").on("submit", function (e) {

        e.preventDefault();

        $.post("/users/add", {
            user: this["user"].value,
            age: this["age"].value
        }).done(function (data) {
            console.log(data);
        });
    });

    $(".btn-delete").click(function (e) {
        e.preventDefault();

        $.get(this.href).done(function (data) {
            if (data.code == 1) {
                location.reload();
            } else {
                alert("删除用户失败");
            }
        });
    });

    $(".form-user").submit(function (e) {
        e.preventDefault();

        $.post("/users/update", {
            id: this["id"].value,
            user: this["user"].value,
            age: this["age"].value
        }).done(function (data) {
            if (data.code == 1) {
                alert("保存成功");
            } else {
                alert("更新用户数据失败");
            }
        });
    });
})();