'use strict'

monApp.config(function ($routeProvider) {
	
	$routeProvider.when('/listOfCustomers', {
		controller : 'findAllCustomerCtrl',
		templateUrl : 'partials/findAllCustomer.html'
	}).when('/findCustomer', {
		controller : 'findCustomerCtrl',
		templateUrl : 'partials/findCustomer.html'
	}).when('/createCustomer', {
		controller : 'createCustomerCtrl',
		templateUrl : 'partials/createCustomer.html'
	}).when('/deleteCustomer', {
		controller : 'deleteCustomerCtrl',
		templateUrl : 'partials/deleteCustomer.html'
	}).when('/updateCustomer', {
		controller : 'updateCustomerCtrl',
		templateUrl : 'partials/updateCustomer.html'
	}).otherwise({
		redirectTo : '/listOfCustomers'
	})
	
});