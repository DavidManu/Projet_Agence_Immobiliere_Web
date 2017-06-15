monApp.controller("findAllOwnerCtrl", function($scope, ownerProvider,
		$rootScope, $location) {

	ownerProvider.findAllO(function(callBack) {

		$scope.listeOwner = callBack;
	});
	$scope.deleteOLink = function(id) {
		console.log($scope.id)
		ownerProvider.deleteO(id, function(callBack) {

			if (callBack != undefined && callBack != '') {
				ownerProvider.findAllO(function(callBack) {
					$scope.listeOwner = callBack;
				});
			}
		});
	}

	$scope.updateOLink = function(owner) {
		console.log($rootScope.ownerUpdate);
		$rootScope.ownerUpdate = owner;
		$location.path('/updateOwner');
	}
});

monApp.controller("findOwnerCtrl", function($scope, ownerProvider, $location,
		$rootScope) {

	$scope.id = undefined;
	$scope.indice = false;
	$scope.rechercher = function() {

		ownerProvider.findO($scope.id, function(callBack) {

			if (callBack != undefined && callBack != '') {
				$scope.indice = true;
				$scope.owner_rec = callBack;
			} else {
				$scope.indice = false;
			}
		});

	}
	$scope.deleteOLink = function(id) {
		console.log($scope.id)
		ownerProvider.deleteO(id, function(callBack) {

			if (callBack != undefined && callBack != '') {
				ownerProvider.findAllO(function(callBack) {
					$location.path('/listOfOwners');
				});
			}
		});
	}

	$scope.updateOLink = function(owner) {
		console.log($rootScope.ownerUpdate);
		$rootScope.ownerUpdate = owner;
		$location.path('/updateOwner');
	}
});

monApp.controller("deleteOwnerCtrl",
		function($scope, ownerProvider, $location) {

			$scope.id = undefined;
			$scope.indice = false;
			$scope.msg = "";
			$scope.supprimer = function() {

				ownerProvider.deleteO($scope.id, function(callBack) {
					if ($scope.id != undefined) {
						if (callBack != undefined && callBack != '') {
							$location.path('/listOfOwners')
						}
					} else {
						$scope.msg = "La personne n'existe pas"
						$scope.indice = false;
					}
				});

			}

		});

monApp.controller("createOwnerCtrl",
		function($scope, ownerProvider, $location) {

			$scope.ownerForm = {
				nom : "",
				prenom : "",
				numPrive : "",
				numTravail : "",
				adresse : {
					rue : "",
					codePostal : "",
					ville : ""
				},
				conseiller : {
					id : undefined

				}
			}

			$scope.ajouter = function() {

				ownerProvider.createO($scope.ownerForm, function(callBack) {

					if (callBack != undefined && callBack != '') {
						$location.path('/listOfOwners')
					}
				});

			}

		});

monApp.controller("updateOwnerCtrl", function($scope, ownerProvider, $location,
		$rootScope) {
	if ($rootScope.ownerUpdate == null) {
		$scope.ownerForm = {
			id : undefined,
			nom : "",
			prenom : "",
			numPrive : "",
			numTravail : "",
			adresse : {
				rue : "",
				codePostal : "",
				ville : ""
			},
			conseiller : {
				id : undefined

			}
		}
	} else {
		$scope.ownerForm = {
			id : $rootScope.ownerUpdate.id,
			nom : $rootScope.ownerUpdate.nom,
			prenom : $rootScope.ownerUpdate.prenom,
			numPrive : $rootScope.ownerUpdate.numPrive,
			numTravail : $rootScope.ownerUpdate.numTravail,
			adresse : {

				rue : $rootScope.ownerUpdate.adresse.rue,
				codePostal : $rootScope.ownerUpdate.adresse.codePostal,
				ville : $rootScope.ownerUpdate.adresse.ville
			},
			conseiller : {
				id : $rootScope.ownerUpdate.id

			}
		}
		$rootScope.ownerUpdate = null;
	}
	$scope.modifier = function() {

		ownerProvider.updateO($scope.ownerForm, function(callBack) {

			if (callBack != undefined && callBack != '') {
				$location.path('/listOfOwners')
			}
		});

	}

});
