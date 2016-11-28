/**
 * Created by plter on 10/17/16.
 */


(function () {

    // var div = document.querySelector("div");
    // div.style.backgroundColor = "red";

    // $("#div").html("Hello World");

    // $("div").html("Hello World");

    var divs = $("div");

    divs.css({backgroundColor: "red", margin: "10px", width: "100px", height: "100px"});

    // divs.css("background-color", "red");
    // divs.css("backgroundColor", "red");

    // divs.append("Hello World");
    // console.log(divs.html());

    // divs.html("");
    // divs.empty();

    divs.click(function (e) {
        // console.log(this);

        // if (this.parentNode) {
        // this.parentNode.removeChild(this);
        // }

        $(this).remove();
    });
})();