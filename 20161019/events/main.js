/**
 * Created by plter on 10/19/16.
 */


(function () {

    var a = document.querySelector(".a");
    var b = document.querySelector(".b");
    var c = document.querySelector(".c");

    function getEventPhaseDescription(phase) {
        switch (phase) {
            case 1:
                return "捕获阶段";
            case 2:
                return "目标阶段";
            case 3:
                return "冒泡阶段";
            default:
                return "没有状态";
        }
    }

    c.addEventListener("click", function (e) {
        console.log(getEventPhaseDescription(e.eventPhase), "c clicked");
    }, true);

    b.addEventListener("click", function (e) {
        console.log(getEventPhaseDescription(e.eventPhase), "b clicked");
    }, true);

    a.addEventListener("click", function (e) {
        console.log(getEventPhaseDescription(event.eventPhase), "a clicked");

        // e.stopPropagation();

    }, true);

    a.addEventListener("click", function (e) {
        console.log(getEventPhaseDescription(event.eventPhase), "a clicked");
    });

    b.addEventListener("click", function (e) {
        console.log(getEventPhaseDescription(event.eventPhase), "b clicked");
    });

    c.addEventListener("click", function (e) {
        console.log(getEventPhaseDescription(event.eventPhase), "c clicked 1");

        // e.stopPropagation();//阻止事件的冒泡行为
        // e.stopImmediatePropagation();//立即阻止事件的冒泡行为
    });

    c.addEventListener("click", function (e) {
        console.log(getEventPhaseDescription(event.eventPhase), "c clicked 2");
    });


})();