monApp.config(function ($routeProvider) {
	
	$routeProvider.when('/findListProperty', {
		controller: 'findAllPropertyController',
		templateUrl: 'partials/findAllProperty.html'
	})
	.when('/findProperty', {
		controller: 'findPropertyByID',
		templateUrl: 'partials/findProperty.html'
	})
	.when('/createProperty', {
		controller: 'addPropertyController',
		templateUrl: 'partials/createProperty.html'
	})
	.otherwise({
		redirectTo: '/findListProperty'
	});
	
})