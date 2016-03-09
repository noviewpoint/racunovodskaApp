(function() {
    "use strict";

    angular
        .module("racunovodskaApp")
        .controller("MenuController", MenuController)
        .controller("PrijavaController", PrijavaController)
        .controller("RegistracijaController", RegistracijaController);

    function MenuController() {
        console.log("In MenuController");
        var vm = this;
    }
    function PrijavaController() {
        console.log("In PrijavaController");
        var vm = this;
    }
    function RegistracijaController() {
        console.log("In RegistracijaController");
        var vm = this;
        /* $timeout(function() {
            $("#vpisiIme").focus();
        }, 10); */
    }

})();
