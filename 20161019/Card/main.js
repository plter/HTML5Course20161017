/**
 * Created by plter on 10/19/16.
 */


(function () {

    $(".card").click(function () {
        var faceA = $(this).find(".a");
        var faceB = $(this).find(".b");
        var selfCard = this;

        if (selfCard.animating) {
            return;
        }

        if (!selfCard.bVisible) {

            /**
             * 该变量指明动画是否正在运行
             * 开始执行动画时，将该变量设置为true，当动画执行结束后，将该变量设置为false
             * @type {boolean}
             */
            selfCard.animating = true;
            faceA.animate({width: "0"}, "slow", function () {
                faceA.hide();
                faceB.show();
                selfCard.bVisible = true;

                faceB.css("width", "0");
                faceB.animate({width: "100%"}, "slow", function () {
                    selfCard.animating = false;
                });
            });
        } else {
            selfCard.animating = true;
            faceB.animate({width: "0"}, "slow", function () {
                faceA.show();
                faceB.hide();
                selfCard.bVisible = false;

                faceA.css("width", "0");
                faceA.animate({width: "100%"}, "slow", function () {
                    selfCard.animating = false;
                });
            });
        }
    });

})();