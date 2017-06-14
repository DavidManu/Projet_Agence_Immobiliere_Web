monApp

.controller('findAllPropertyController', function($scope, biensProvider, $rootScope, $location, $window) {
	biensProvider.getListProperty(function(calback){
		$scope.listeBiens=calback;
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
	$scope.addPropertyForm={
		genre: "",
		superficie: 0,
		photo: undefined
	};
	$scope.addProperty=function(){
		biensProvider.createProperty($scope.addForm, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$location.path('/findListProperty');
			}
		});
	};
})
