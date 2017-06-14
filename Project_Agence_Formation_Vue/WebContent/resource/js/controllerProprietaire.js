monApp.controller("findAllOwnerCtrl", function($scope, ownerProvider) {

	ownerProvider.findAllO(function(callBack) {

		$scope.listeOwner = callBack;
	});

});

monApp.controller("findOwnerCtrl", function($scope, ownerProvider, $location) {

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

});

monApp.controller("deleteOwnerCtrl",
		function($scope, ownerProvider, $location) {

			$scope.id = undefined;

			$scope.supprimer = function() {

				ownerProvider.deleteO($scope.id, function(callBack) {

					if (callBack != undefined && callBack != '') {
						$location.path('/listOfOwners')
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

monApp.controller("updateOwnerCtrl",
		function($scope, ownerProvider, $location) {

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
				}
			}
			$scope.modifier = function() {

				ownerProvider.updateO($scope.ownerForm, function(callBack) {

					if (callBack != undefined && callBack != '') {
						$location.path('/listOfOwners')
					}
				});

			}

		});
