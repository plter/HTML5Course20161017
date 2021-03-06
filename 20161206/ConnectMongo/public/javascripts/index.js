/**
 * Created by plter on 2016/12/6.
 */

(function () {

    $("#form-add-user").submit(function (e) {
        e.preventDefault();

        $.post("/users/add", {
            name: this['name'].value,
            age: this['age'].value
        }).done(function (data) {
            if (data.code == 1) {
                location.reload();
            } else {
                alert("添加用户失败");
            }
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

        $.post("/users/update", {
            _id: this['_id'].value,
            name: this['name'].value,
            age: this['age'].value
        }).done(function (data) {
            if (data.code == 1) {
                alert("保存成功");
            } else {
                alert("保存失败");
            }
        });
    });

})();