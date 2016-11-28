/**
 * Created by plter on 10/19/16.
 */

// "use strict";

(function () {

    function hello() {
        "use strict";
        console.log(this);
    }

    hello();

    function hi() {
        console.log(this);
    }

    hi();

})();