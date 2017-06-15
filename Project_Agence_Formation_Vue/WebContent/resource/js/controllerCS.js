monApp

.controller('addCsController', function($scope, csProvider, $location){
	$scope.addCsForm={
		type: "",
		dateConstructionMin: 0,
		minSurfaceMin:0,
		cprixMin: 0
	};
	$scope.addCs=function(){
		csProvider.createCs($scope.addCsForm, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$location.path('/listOfProperty');
			}
		});
	};
})

.controller('updateCsController', function($scope, csProvider, $location){
	$scope.updateCsForm={
		id: 0,
		type: "",
		dateConstructionMin: 0,
		minSurfaceMin:0,
		cprixMin: 0
	};
	$scope.updateCs=function(){
		csProvider.changeCs($scope.updateCsForm, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$location.path('/listOfProperty');
			}
		});
	};
})

.controller('deleteCsController', function($scope, csProvider, $location){
	$scope.id=undefined;
	$scope.deleteCs=function(){
		csProvider.removeCs($scope.id, function(calback){
			if ((calback!=0)&&(calback!="")) {
				$location.path('/listOfProperty');
			}
		});
	};
})