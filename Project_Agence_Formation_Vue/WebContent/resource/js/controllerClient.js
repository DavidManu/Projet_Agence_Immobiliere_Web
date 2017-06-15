monApp.controller("findAllCustomerCtrl", function($scope, CustomerProvider,
		$rootScope, $location) {

	CustomerProvider.findAllC(function(callBack) {

		$scope.listeCustomer = callBack;
	});
	$scope.deleteCLink = function(id) {
		console.log($scope.id)
		CustomerProvider.deleteC(id, function(callBack) {

			if (callBack != undefined && callBack != '') {
				CustomerProvider.findAllC(function(callBack) {
					$scope.listeCustomer = callBack;
				});
			}
		});
	}

	$scope.updateCLink = function(customer) {
		console.log($rootScope.CustomerUpdate);
		$rootScope.CustomerUpdate = customer;
		$location.path('/updateCustomer');
	}
});

monApp.controller("findCustomerCtrl", function($scope, CustomerProvider,
		$location, $rootScope) {

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
	$scope.deleteCLink = function(id) {
		console.log($scope.id)
		CustomerProvider.deleteC(id, function(callBack) {

			if (callBack != undefined && callBack != '') {
				CustomerProvider.findAllC(function(callBack) {
					$location.path('/listOfCustomers')
				});
			}
		});
	}

	$scope.updateCLink = function(Customer) {
		console.log($rootScope.CustomerUpdate);
		$rootScope.CustomerUpdate = Customer;
		$location.path('/updateCustomer');
	}
});

monApp.controller("deleteCustomerCtrl", function($scope, CustomerProvider,
		$location) {

	$scope.id = undefined;
	$scope.indice = false;

	$scope.supprimer = function() {

		CustomerProvider.deleteC($scope.id, function(callBack) {
			if ($scope.id != undefined) {
				if (callBack != undefined && callBack != '') {
					$location.path('/listOfCustomers')
				}
			} else {
				$scope.msg = "La personne n'existe pas"
				$scope.indice = false;
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
		$location, $rootScope) {
	if ($rootScope.CustomerUpdate == null) {
		$scope.CustomerForm = {
			id : undefined,
			nom : "",
			prenom : "",
			numPrive : "",
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
	} else {
		$scope.CustomerForm = {
			id : $rootScope.CustomerUpdate.id,
			nom : $rootScope.CustomerUpdate.nom,
			prenom : $rootScope.CustomerUpdate.prenom,
			numPrive : $rootScope.CustomerUpdate.numPrive,
			adresse : {

				rue : $rootScope.CustomerUpdate.adresse.rue,
				codePostal : $rootScope.CustomerUpdate.adresse.codePostal,
				ville : $rootScope.CustomerUpdate.adresse.ville
			},
			classeSt : {
				id : $rootScope.CustomerUpdate.id

			},
			conseiller : {
				id : $rootScope.CustomerUpdate.id

			}
		}
		$rootScope.CustomerUpdate = null;
	}
	$scope.modifier = function() {

		CustomerProvider.updateC($scope.CustomerForm, function(callBack) {

			if (callBack != undefined && callBack != '') {
				$location.path('/listOfCustomers')
			}
		});

	}

});