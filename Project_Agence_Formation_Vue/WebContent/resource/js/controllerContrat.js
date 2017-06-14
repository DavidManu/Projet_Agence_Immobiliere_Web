monApp

.controller('findAllContratController', function($scope, contratProvider, $rootScope, $location){
	contratProvider.getListContrat(function(callBack){
		$scope.listeContrat=callBack;
	});
})

.controller('addContratController', function($scope, contratProvider, $location){
	$scope.addContratForm={
			dateSignature:undefined,
			refContrat:undefined,
			Bien:{
				id:undefined
			},
			Client:{
				id:undefined
			},
			Conseiller:{
				id:undefined
			}
	};
	$scope.addContrat=function(){
		contratProvider.createContrat($scope.addContratForm, function(callBack){
			if ((callBack!=0)&&(callBack!="")){
				$location.path('/listOfContracts');
			}
		});
	};
})

.controller('updateContratController', function($scope,contratProvider,$location,$rootScope){
	$scope.updContratForm={
			dateSignature:undefined,
			refContrat:undefined,
			Bien:{
				id:undefined
			},
			Client:{
				id:undefined
			},
			Conseiller:{
				id:undefined
			}
	};
	
	$scope.updContrat=function(){
		contratProvider.majContrat($scope.updContratForm,function(callBack){
			if(callBack!=undefined && callBack!=''){
				$location.path('/listOfContracts');
			}
		});
	}
})

.controller("deleteContratController",function($scope,contratProvider,$location){
	$scope.id=undefined;
$scope.delContrat=function(){
	contratProvider.delContrat($scope.id,function(callBack){
		if(callBack!=undefined && callBack!=''){
			$location.path('/listOfContracts');
		}
	})
}
})
	
.controller('getContratByIDController',function($scope,contratProvider,$location,$rootScope){
	$scope.id=undefined;
	$scope.indice=false;
	
	$scope.getByIdContrat=function(){
		contratProvider.getContratById($scope.id,function(callBack){
			if(callBack!=undefined && callBack!=''){
				$scope.indice=true;
				$scope.contratRec=callBack;
			}else{
				$scope.indice=false;
			}
		})
	}
})