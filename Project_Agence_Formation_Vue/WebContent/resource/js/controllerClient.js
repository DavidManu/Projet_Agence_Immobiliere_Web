monApp.controller("findAllCustomerCtrl", function($scope, CustomerProvider) {

	CustomerProvider.findAllC(function(callBack) {

		$scope.listeCustomer = callBack;
	});

});

monApp.controller("findCustomerCtrl", function($scope, CustomerProvider,
		$location) {

	$scope.id = undefined;
	$scope.indice = false;
	$scope.rechercher = function() {

		CustomerProvider.findC($scope.id, function(callBack) {

			if (callBack != undefined && callBack != '') {
				$scope.indice = true;
				$scope.Customer_rec = callBack;
			} else {
				$scope.indice = false;
			}
		});

	}

});

monApp.controller("deleteCustomerCtrl", function($scope, CustomerProvider,
		$location) {

	$scope.id = undefined;

	$scope.supprimer = function() {

		CustomerProvider.deleteC($scope.id, function(callBack) {

			if (callBack != undefined && callBack != '') {
				$location.path('/listOfCustomers')
			}
		});

	}

});

monApp.controller("createCustomerCtrl", function($scope, CustomerProvider,
		$location) {

	$scope.CustomerForm = {
		nom : "",
		prenom : "",
		numPrive : undefined,
		adresse : {
			rue : "",
			codePostal : "",
			ville : ""
		},
		classeSt : {
			id : undefined
		},
		conseiller : {
			id : undefined
		}
	}

	$scope.ajouter = function() {

		CustomerProvider.createC($scope.CustomerForm, function(callBack) {

			if (callBack != undefined && callBack != '') {
				$location.path('/listOfCustomers')
			}
		});

	}

});

monApp.controller("updateCustomerCtrl", function($scope, CustomerProvider,
		$location) {

	$scope.CustomerForm = {
		id : "",
		nom : "",
		prenom : "",
		numPrive : undefined,
		adresse : {
			rue : "",
			codePostal : "",
			ville : ""
		},
		classeSt : {
			id : undefined
		},
		conseiller : {
			id : undefined
		}
	}
	$scope.modifier = function() {

		CustomerProvider.updateC($scope.CustomerForm, function(callBack) {

			if (callBack != undefined && callBack != '') {
				$location.path('/listOfCustomers')
			}
		});

	}

});