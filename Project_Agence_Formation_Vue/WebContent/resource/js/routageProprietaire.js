'use strict'

monApp.config(function($routeProvider) {

	$routeProvider.when('/listOfOwners', {
		controller : 'findAllOwnerCtrl',
		templateUrl : 'partials/findAllOwner.html'
	}).when('/findOwner', {
		controller : 'findOwnerCtrl',
		templateUrl : 'partials/findOwner.html'
	}).when('/createOwner', {
		controller : 'createOwnerCtrl',
		templateUrl : 'partials/createOwner.html'
	}).when('/deleteOwner', {
		controller : 'deleteOwnerCtrl',
		templateUrl : 'partials/deleteOwner.html'
	}).when('/updateOwner', {
		controller : 'updateOwnerCtrl',
		templateUrl : 'partials/updateOwner.html'
	}).otherwise({
		redirectTo : '/listOfOwners'
	})

});