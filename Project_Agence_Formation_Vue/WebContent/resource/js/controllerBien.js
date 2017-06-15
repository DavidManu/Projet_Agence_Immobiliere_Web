monApp

.controller('findAllPropertyController', function($scope, biensProvider, $rootScope, $location, $window) {
	biensProvider.getListProperty(function(calback){
		$scope.listeBiens=calback;
	});
	biensProvider.getListcs(function(calback){
		$scope.listecs=calback;
	});
	
	$scope.getProperty=function(property){
		$rootScope.oneProperty=null;
		$rootScope.oneProperty=property;
		$location.path('/findProperty2');
	};
	
})

.controller('findProperty', function($scope, biensProvider, $rootScope, $location){
	$scope.b=null;
	if ($rootScope.oneProperty==null){
		$scope.b=null;
	}
	else {
		$scope.b=$rootScope.oneProperty;
	}
	$scope.cache=false;
	$scope.indice1=false;
	$scope.indice2=false;
	$scope.id= 0;
	if ($scope.b.genre==1){
		$scope.indice1=true;
		$scope.indice2=false;
	}
	else {
		$scope.indice1=false;
		$scope.indice2=true;
	}
})

.controller('findPropertyByID', function($scope, biensProvider, $rootScope, $location){
	$scope.cache=false;
	$scope.indice1=false;
	$scope.indice2=false;
	$scope.id= 0;
	$scope.findProperty=function(){
		biensProvider.getProperty($scope.id, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$scope.cache=true;
				$scope.b=calback;
				if ($scope.b.genre==1){
					$scope.indice1=true;
					$scope.indice2=false;
				}
				else {
					$scope.indice1=false;
					$scope.indice2=true;
				}
				console.log($scope.indice1);
				console.log($scope.indice2);
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
		console.log(genre);
		if (genre=="true") {
			$scope.indice1=true;
			$scope.indice2=false;
		}
		else {
			$scope.indice1=false;
			$scope.indice2=true;
		}
		$scope.indice3=true;
		console.log($scope.indice1);
		console.log($scope.indice2);
		console.log($scope.indice3);
	};
	$scope.addProperty=function(){
		biensProvider.createProperty($scope.addPropertyForm, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$location.path('/listOfProperty');
			}
		});
	};
})

.controller('updatePropertyController', function($scope, biensProvider, $location){
	$scope.indice1=false;
	$scope.indice2=false;
	$scope.indice3=false;
	$scope.updatePropertyForm={
		id: "",
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
		console.log(genre);
		if (genre=="true") {
			$scope.indice1=true;
			$scope.indice2=false;
		}
		else {
			$scope.indice1=false;
			$scope.indice2=true;
		}
		$scope.indice3=true;
		console.log($scope.indice1);
		console.log($scope.indice2);
		console.log($scope.indice3);
	};
	$scope.updateProperty=function(){
		biensProvider.changeProperty($scope.updatePropertyForm, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$location.path('/listOfProperty');
			}
		});
	};
})

.controller('deletePropertyController', function($scope, biensProvider, $location){
	$scope.id=undefined;
	$scope.deleteProperty=function(){
		biensProvider.removeProperty($scope.id, function(calback){
			if ((calback!=undefined)&&(calback!="")) {
				$location.path('/listOfProperty');
			}
		});
	};
})
