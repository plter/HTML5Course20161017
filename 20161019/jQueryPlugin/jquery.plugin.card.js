/**
 * Created by plter on 10/19/16.
 */


(function () {

    $.fn.card = function (args) {

        //声明参数，如果外界不传，则使用默认值宽高100*100
        var params = args || {width: "100px", height: "100px"};

        //设置该卡片的css样式
        this.css(params);

        //设置卡片的两个面的css样式
        this.find(".face").css({width: "100%", height: "100%", margin: "0 auto"});
        this.find(".b").hide();

        //对卡片添加一个点击事件侦听器
        this.click(function () {
            /**
             * 被点击的card html节点
             */
            var thisCardElement = this;

            if (!thisCardElement.faceA) {
                thisCardElement.faceA = $(this).find(".a");
            }
            if (!thisCardElement.faceB) {
                thisCardElement.faceB = $(this).find(".b");
            }

            if (thisCardElement.animating) {
                return;
            }

            if (!thisCardElement.bVisible) {

                /**
                 * 该变量指明动画是否正在运行
                 * 开始执行动画时，将该变量设置为true，当动画执行结束后，将该变量设置为false
                 * @type {boolean}
                 */
                thisCardElement.animating = true;
                thisCardElement.faceA.animate({width: "0"}, "slow", function () {
                    thisCardElement.faceA.hide();
                    thisCardElement.faceB.show();
                    thisCardElement.bVisible = true;

                    thisCardElement.faceB.css("width", "0");
                    thisCardElement.faceB.animate({width: "100%"}, "slow", function () {
                        thisCardElement.animating = false;
                    });
                });
            } else {
                thisCardElement.animating = true;
                thisCardElement.faceB.animate({width: "0"}, "slow", function () {
                    thisCardElement.faceA.show();
                    thisCardElement.faceB.hide();
                    thisCardElement.bVisible = false;

                    thisCardElement.faceA.css("width", "0");
                    thisCardElement.faceA.animate({width: "100%"}, "slow", function () {
                        thisCardElement.animating = false;
                    });
                });
            }
        });
    }

})();