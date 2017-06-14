monApp.config(function ($routeProvider) {
	$routeProvider.when('/listOfVisits', {
		controller: 'findAllVisiteController',
		templateUrl: 'partials/findAllVisite.html'
	})
	.when('/createVisit', {
		controller: 'addVisiteController',
		templateUrl: 'partials/createVisite.html'
	})
	.when('/updateVisit', {
		controller: 'updateVisiteController',
		templateUrl: 'partials/updateVisite.html'
	})
	.when('/deleteVisit', {
		controller: 'deleteVisiteController',
		templateUrl: 'partials/deleteVisite.html'
	})
	.when('/findVisit', {
		controller: 'getVisiteByIDController',
		templateUrl: 'partials/findVisite.html'
	})
	.otherwise({
		redirectTo: '/findListVisite'
	});
})
