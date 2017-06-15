monApp.config(function ($routeProvider) {
	$routeProvider.when('/listOfContracts', {
		controller: 'findAllContratController',
		templateUrl: 'partials/findAllContrat.html'
	})
	.when('/createContract', {
		controller: 'addContratController',
		templateUrl: 'partials/createContrat.html'
	})
	.when('/updateContract', {
		controller: 'updateContratController',
		templateUrl: 'partials/updateContrat.html'
	})
	.when('/deleteContract', {
		controller: 'deleteContratController',
		templateUrl: 'partials/deleteContrat.html'
	})
	.when('/findContract', {
		controller: 'getContratByIDController',
		templateUrl: 'partials/findContrat.html'
	})
	.otherwise({
		redirectTo: '/listOfProperty'
	});
})
