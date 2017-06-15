monApp

.controller('findAllContratController', function($scope, contratProvider, $rootScope, $location){
	contratProvider.getListContrat(function(callBack){
		$scope.listeContrat=callBack;
	});
	
	$scope.deleteLien=function(id){
		console.log($scope.id)
		visiteProvider.delContrat(id,function(callBack){
			
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
	if($rootScope.contratMod==null){
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
	}
	}else{
		$scope.updContratForm={
				dateSignature:$rootScope.contratMod.dateSignature,
				refContrat:$rootScope.contratMod.refContrat,
				Bien:{
					id:$rootScope.contratMod.bien.id
				},
				Client:{
					id:$rootScope.contratMod.client.id
				},				
				Conseiller:{
					id:$rootScope.contratMod.conseiller.id
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
})