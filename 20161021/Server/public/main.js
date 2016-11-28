/**
 * Created by plter on 10/21/16.
 */

(function () {

    var resultDiv = $("#result");

    $("#user-form").submit(function (e) {
        e.preventDefault();

        // $.post("hello", {user: this["user"].value}).done(function (data) {
        //     // console.log(data);
        //     $("#result").html(data);
        // });

        // $.ajax("hello", {
        //     data: {user: this["user"].value}
        // }).done(function (data) {
        //     $("#result").html(data);
        // });

        $.ajax({
            url: "hello",
            type: "POST",
            data: {user: this["user"].value},
            complete: function (jqXHR, status) {
                console.log(arguments);

                if (status == "success") {
                    resultDiv.html(jqXHR.responseText);
                } else {
                    resultDiv.html("通信失败");
                }
            }
        });
    });

})();