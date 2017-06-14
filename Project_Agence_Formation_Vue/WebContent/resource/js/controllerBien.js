monApp

.controller('findAllPropertyController', function($scope, biensProvider, $rootScope, $location, $window) {
	biensProvider.getListProperty(function(calback){
		$scope.listeBiens=calback;
		if ($scope.listeBiens.genre==1){
			$scope.indice1=false;
			$scope.indice2=true;
		}
		else {
			$scope.indice1=true;
			$scope.indice2=false;
		}
	});
})

.controller('findPropertyByID', function($scope, biensProvider, $rootScope, $location){
	$scope.cache=false;
	$scope.id=undefined;
	$scope.findProperty=function(){
		biensProvider.getProperty($scope.id, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$scope.cache=true;
				$scope.property=calback;
			}
		});
	};
})

.controller('addPropertyController', function($scope, biensProvider, $location){
	$scope.indice1=false;
	$scope.indice2=false;
	$scope.indice3=false;
	$scope.addPropertyForm={
		type: "",
		superficie: 0,
		genre: undefined,
		statut: "",
		image: "",
		cadastre: "",
		prix: 0,
		etat: "",
		loyer: 0,
		charges: 0,
		caution: 0,
		garniture: "",
		adresse: {
			rue: "",
			codePostal: "",
			ville
		},
		dateDispo: undefined,
		dateMEL: undefined
	};
	$scope.infoSup=function(genre){
		genre=$scope.addPropertyForm.genre;
		if (genre==1) {
			$scope.indice1=true;
			$scope.indice2=false;
			$scope.indice3=true;
		}
		else {
			$scope.indice1=false;
			$scope.indice2=true;
			$scope.indice3=true;
		}
	}
	$scope.addProperty=function(){
		biensProvider.createProperty($scope.addPropertyForm, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$location.path('/findListProperty');
			}
		});
	};
})
