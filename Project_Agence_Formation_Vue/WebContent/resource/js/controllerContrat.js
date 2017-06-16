monApp

.controller('findAllContratController', function($scope, contratProvider, $rootScope, $location){
	contratProvider.getListContrat(function(callBack){
		$scope.listeContrat=callBack;
	});
	
	$scope.deleteLien=function(id){
		console.log($scope.id)
		contratProvider.delContrat(id,function(callBack){
			
			if(callBack!=undefined && callBack!=''){
				contratProvider.getListContrat(function(callBack){
					$scope.listeContrat=callBack;
				});
			}
		});
	}
	
	$scope.modifLien=function(contrat){
		$rootScope.contratMod=contrat;
		console.log($rootScope.contratMod);
		$location.path('/updateContract');
	}
	
	
})

.controller('addContratController', function($scope, contratProvider, $location){
	$scope.addContratForm={
			dateSignature:undefined,
			refContrat:undefined,
			bien:{
				id:undefined
			},
			client:{
				id:undefined
			},
			conseiller:{
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
	if($rootScope.contratMod==null){
	$scope.updContratForm={
			id:undefined,
			dateSignature:undefined,
			refContrat:undefined,
			bien:{
				id:undefined
			},
			client:{
				id:undefined
			},
			conseiller:{
				id:undefined
			}
	}
	}else{
		$scope.updContratForm={
				id:$rootScope.contratMod.id,
				dateSignature:$rootScope.contratMod.dateSignature,
				refContrat:$rootScope.contratMod.refContrat,
				bien:{
					id:$rootScope.contratMod.bien
				},
				client:{
					id:$rootScope.contratMod.client
				},				
				conseiller:{
					id:$rootScope.contratMod.conseiller
				}
		}
		$rootScope.contratMod=null;
	}
	
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
	
	$scope.deleteLien=function(id){
		console.log($scope.id)
		contratProvider.delContrat(id,function(callBack){
			
			if(callBack!=undefined && callBack!=''){
				contratProvider.getListContrat(function(callBack){
					$location.path('/listOfContracts');
				});
			}
		});
	}
	
	$scope.modifLien=function(contrat){
		$rootScope.contratMod=contrat;
		console.log($rootScope.contratMod);
		$location.path('/updateContract');
	}
})