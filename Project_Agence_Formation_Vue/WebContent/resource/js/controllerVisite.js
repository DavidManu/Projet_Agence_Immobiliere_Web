monApp

.controller('findAllVisiteController', function($scope, visiteProvider, $rootScope, $location){
	visiteProvider.getListVisite(function(callBack){
		$scope.listeVisite=callBack;
	});
})

.controller('addVisiteController', function($scope, visiteProvider, $location){
	$scope.addVisiteForm={
			dateVisite:undefined,
			clientAccepte:undefined,
			conseillerAccepte:undefined,
			Conseiller:{
				id:undefined
			}
	};
	$scope.addVisite=function(){
		visiteProvider.createVisite($scope.addVisiteForm, function(callBack){
			if ((callBack!=0)&&(callBack!="")){
				$location.path('/listOfVisits');
			}
		});
	};
})

.controller('updateVisiteController', function($scope,visiteProvider,$location,$rootScope){
	$scope.updVisiteForm={
			dateVisite:undefined,
			clientAccepte:undefined,
			conseillerAccepte:undefined,
			Conseiller:{
				id:undefined
	};
	$scope.updVisite=function(){
		visiteProvider.majVisite($scope.updVisiteForm,function(callBack){
			if(callBack!=undefined && callBack!=''){
				$location.path('/listOfVisits');
			}
		});
	}
})