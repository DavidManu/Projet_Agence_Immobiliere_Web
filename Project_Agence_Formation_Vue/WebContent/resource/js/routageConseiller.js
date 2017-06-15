monApp.config(function ($routeProvider) {
	
	$routeProvider.when('/connexion', {
		controller: 'connexionController',
		templateUrl: 'partials/connexion.html'
	})
	.when('/deconnexion', {
		controller: 'findAllPropertyController2',
		templateUrl: 'partials/findAllProperty.html'
	})
	.when('/listOfProperty', {
		controller: 'findAllPropertyController',
		templateUrl: 'partials/findAllProperty.html'
	})
	.otherwise({
		redirectTo: '/listOfProperty'
	});
	
})