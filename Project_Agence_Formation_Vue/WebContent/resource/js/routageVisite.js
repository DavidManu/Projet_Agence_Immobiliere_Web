monApp.config(function ($routeProvider) {
	$routeProvider.when('/listOfVisits', {
		controller: 'findAllVisiteController',
		templateUrl: 'partials/findAllVisite.html'
	})
	.when('/createVisit', {
		controller: 'addVisiteController',
		templateUrl: 'partials/createVisite.html'
	})
	.when('/updateVisite', {
		controller: 'updateVisiteController',
		templateUrl: 'partials/updateVisite.html'
	})
	.when('/deleteVisite', {
		controller: 'deleteVisiteController',
		templateUrl: 'partials/deleteVisite.html'
	})
	.when('/findVisiteByID', {
		controller: 'getVisiteByIDController',
		templateUrl: 'partials/getVisiteByID.html'
	})
	.otherwise({
		redirectTo: '/findListVisite'
	});
})
