monApp.config(function($routeProvider) {

	$routeProvider.when('/listOfProperty', {
		controller : 'findAllPropertyController',
		templateUrl : 'partials/findAllProperty.html'
	}).when('/findAllPropertyByCategory', {
		controller : 'findAllPropertyByCategoryController',
		templateUrl : 'partials/findAllPropertyByCategory.html'
	}).when('/findAllPropertyByCategory2', {
		controller : 'findAllPropertyByCategoryController2',
		templateUrl : 'partials/findAllPropertyByCategory2.html'
	}).when('/findProperty', {
		controller : 'findPropertyByID',
		templateUrl : 'partials/findProperty.html'
	}).when('/findProperty2', {
		controller : 'findProperty',
		templateUrl : 'partials/findProperty2.html'
	}).when('/createProperty', {
		controller : 'addPropertyController',
		templateUrl : 'partials/createProperty.html'
	}).when('/updateProperty', {
		controller : 'updatePropertyController',
		templateUrl : 'partials/updateProperty.html'
	}).when('/updateProperty2', {
		controller : 'updatePropertyController2',
		templateUrl : 'partials/updateProperty2.html'
	}).when('/deleteProperty', {
		controller : 'deletePropertyController',
		templateUrl : 'partials/deleteProperty.html'
	}).when('/generateMail', {
		controller : 'generateMailController',
		templateUrl : 'partials/findAllProperty.html'
	}).otherwise({
		redirectTo : '/listOfProperty'
	});
})