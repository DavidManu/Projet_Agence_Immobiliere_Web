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
	
	$scope.getPropertyByCategory=function(id){
		$rootScope.idCategory=null;
		$rootScope.idCategory=id;
		$location.path('/findAllPropertyByCategory');
	};
	
})

.controller('findAllPropertyController2', function($scope, biensProvider, $rootScope, $location, $window) {
	biensProvider.getListProperty(function(calback){
		$rootScope.indiceCo=false;
		$rootScope.conseillerID=0;
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
	
	$scope.getPropertyByCategory=function(id){
		$rootScope.idCategory=null;
		$rootScope.idCategory=id;
		$location.path('/findAllPropertyByCategory');
	};
	
})

.controller('findAllPropertyByCategoryController', function($scope, $rootScope, biensProvider, $location){
	$scope.id=undefined;
	if ($rootScope.idCategory==null){
		$scope.id=null;
	}
	else {
		$scope.id=$rootScope.idCategory;
	}
	biensProvider.getAllPropertyByCategory($scope.id, function(calback){
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
	
	$scope.getPropertyByCategory=function(id){
		$rootScope.idCategory=null;
		$rootScope.idCategory=id;
		$location.path('/findAllPropertyByCategory2');
	};
})

.controller('findAllPropertyByCategoryController2', function($scope, $rootScope, biensProvider, $location){
	$scope.id=undefined;
	if ($rootScope.idCategory==null){
		$scope.id=null;
	}
	else {
		$scope.id=$rootScope.idCategory;
	}
	biensProvider.getAllPropertyByCategory($scope.id, function(calback){
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
	
	$scope.getPropertyByCategory=function(id){
		$rootScope.idCategory=null;
		$rootScope.idCategory=id;
		$location.path('/findAllPropertyByCategory');
	};
})

.controller('findProperty', function($scope, biensProvider, $rootScope, $location){
	$scope.b=null;
	$scope.montrerMap=false;
	if ($rootScope.oneProperty==null){
		$scope.b=null;
		$scope.rue= "";
		$scope.codePostal= 0;
		$scope.ville= "";
	}
	else {
		$scope.b=$rootScope.oneProperty;
		$scope.rue=$scope.b.adresse.rue;
		$scope.codePostal=$scope.b.adresse.codePostal;
		$scope.ville=$scope.b.adresse.ville;
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
		biensProvider.geoAdresse($scope.rue, $scope.codePostal, $scope.ville, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$scope.montrerMap=true;
				$scope.map=calback;
				$scope.lat=$scope.map.results[0].geometry.location.lat;
				$scope.lng=$scope.map.results[0].geometry.location.lng;
				map=new google.maps.Map(document.getElementById("map"), {
			        zoom: 19,
			        center: new google.maps.LatLng($scope.lat, $scope.lng),
			        mapTypeId: google.maps.MapTypeId.ROADMAP
			    });
				marker=new google.maps.Marker({
			          position: {lat: $scope.lat, lng: $scope.lng},
			          map: map
			    });
			}
		});
})

.controller('findPropertyByID', function($scope, biensProvider, $rootScope, $location){
	$scope.cache=false;
	$scope.montrerMap=false;
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
				$scope.rue=$scope.b.adresse.rue;
				$scope.codePostal=$scope.b.adresse.codePostal;
				$scope.ville=$scope.b.adresse.ville;
					biensProvider.geoAdresse($scope.rue, $scope.codePostal, $scope.ville, function(calback){
						if ((calback!=0)&&(calback!="")) {
							$scope.montrerMap=true;
							$scope.map=calback;
							$scope.lat=$scope.map.results[0].geometry.location.lat;
							$scope.lng=$scope.map.results[0].geometry.location.lng;
							map=new google.maps.Map(document.getElementById("map"), {
						        zoom: 19,
						        center: new google.maps.LatLng($scope.lat, $scope.lng),
						        mapTypeId: google.maps.MapTypeId.ROADMAP
						    });
							marker=new google.maps.Marker({
						          position: {lat: $scope.lat, lng: $scope.lng},
						          map: map
						    });
						}
					});
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
