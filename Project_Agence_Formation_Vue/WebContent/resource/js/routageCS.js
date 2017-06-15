monApp.config(function ($routeProvider) {
	
	$routeProvider.when('/listOfProperty', {
		controller: 'findAllPropertyController',
		templateUrl: 'partials/findAllProperty.html'
	})
	.when('/createCs', {
		controller: 'addCsController',
		templateUrl: 'partials/createCs.html'
	})
	.when('/updateCs', {
		controller: 'updateCsController',
		templateUrl: 'partials/updateCs.html'
	})
	.when('/deletecs', {
		controller: 'deleteCsController',
		templateUrl: 'partials/deleteCs.html'
	})
	.otherwise({
		redirectTo: '/listOfProperty'
	});
	
})