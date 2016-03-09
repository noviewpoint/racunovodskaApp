(function() {
	"use strict";

	angular
		.module("racunovodskaApp", ["ui.router", "ngCookies"])
		.config(config)
		.run(run);

	function config($urlRouterProvider, $stateProvider, $httpProvider) {

		// omogoci, da ob requestih angular zraven v headerju posilja Cookie s SessionID
		$httpProvider.defaults.withCredentials = true;

		// For any unmatched url, redirect
		$urlRouterProvider
			.otherwise("/prijava");

		$stateProvider
			.state("prijava", {
				url: "/prijava",
				templateUrl: "partials/prijava.html",
				controller: "PrijavaController",
				controllerAs: "PrijavaCtrl"
			})
			.state("registracija", {
				url: "/registracija",
				templateUrl: "partials/registracija.html",
				controller: "RegistracijaController",
				controllerAs: "RegistracijaCtrl"
			})
			.state("menu", {
				url: "/",
				templateUrl: "partials/menu.html",
				controller: "MenuController",
				controllerAs: "MenuCtrl"
			});
	}

	function run($location, $rootScope) {
		// ob reloadu se aplikacija vedno postavi na zacetek
		$location.path("/prijava");

		$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
			console.log("Application has switched from state", fromState, "to state", toState);
		});
	}

})();
