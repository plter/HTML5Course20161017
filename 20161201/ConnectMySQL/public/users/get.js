/**
 * Created by plter on 2016/12/1.
 */
(function () {

    $("#form-user").on("submit", function (e) {

        e.preventDefault();

        $.post("/users/add", {
            user: this["user"].value,
            age: this["age"].value
        }).done(function (data) {
            console.log(data);
        });
    });
})();