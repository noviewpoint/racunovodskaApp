(function() {
    "use strict";

    angular
        .module("racunovodskaApp")
        .service("xService", xService);

    function xService() {
        console.log("In xService");
    }

})();
