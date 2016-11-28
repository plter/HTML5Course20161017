/**
 * Created by plter on 10/17/16.
 */


(function () {

    $("div").each(function (index, element) {
        console.log(index, element);

        $(element).html("Item " + index);
    });

})();