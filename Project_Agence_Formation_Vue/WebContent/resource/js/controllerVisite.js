monApp

.controller('findAllVisiteController', function($scope, visiteProvider, $rootScope, $location){
	visiteProvider.getListVisite(function(callBack){
		$scope.listeVisite=callBack;
	});
	
	$scope.deleteLien=function(id){
		console.log($scope.id)
		visiteProvider.delVisite(id,function(callBack){
			
			if(callBack!=undefined && callBack!=''){
				visiteProvider.getListVisite(function(callBack){
					$scope.listeVisite=callBack;
				});
			}
		});
	}
	
	$scope.modifLien=function(visite){
		$rootScope.visiteMod=visite;
		console.log($rootScope.visiteMod);
		$location.path('/updateVisit');
	}
	
	
})

.controller('addVisiteController', function($scope, visiteProvider, $location){
	$scope.addVisiteForm={
			dateVisite:undefined,
			clientAccepte:undefined,
			conseillerAccepte:undefined,
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
	$scope.addVisite=function(){
		visiteProvider.createVisite($scope.addVisiteForm, function(callBack){
			if ((callBack!=0)&&(callBack!="")){
				$location.path('/listOfVisits');
			}
		});
	};
})

.controller('updateVisiteController', function($scope,visiteProvider,$location,$rootScope){
	if($rootScope.visiteMod==null){
	$scope.updVisiteForm={
			id:undefined,
			dateVisite:undefined,
			clientAccepte:undefined,
			conseillerAccepte:undefined,
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
		$scope.updVisiteForm={
				id:$rootScope.visiteMod.id,
				dateVisite:$rootScope.visiteMod.dateVisite,
				clientAccepte:$rootScope.visiteMod.clientAccepte,
				conseillerAccepte:$rootScope.visiteMod.conseillerAccepte,
				Bien:{
					id:$rootScope.visiteMod.bien
				},
				Client:{
					id:$rootScope.visiteMod.client
				},
				Conseiller:{
					id:$rootScope.visiteMod.conseiller
				}
		}
		$rootScope.visiteMod=null;
	}
		
	$scope.updVisite=function(){
		visiteProvider.majVisite($scope.updVisiteForm,function(callBack){
			if(callBack!=undefined && callBack!=''){
				$location.path('/listOfVisits');
			}
		});
	}
})

.controller("deleteVisiteController",function($scope,visiteProvider,$location){
	$scope.id=undefined;
$scope.delVisite=function(){
	visiteProvider.delVisite($scope.id,function(callBack){
		if(callBack!=undefined && callBack!=''){
			$location.path('/listOfVisits');
		}
	})
}
})
	
.controller('getVisiteByIDController',function($scope,visiteProvider,$location,$rootScope){
	$scope.id=undefined;
	$scope.indice=false;
	
	$scope.getByIdVisite=function(){
		visiteProvider.getVisiteById($scope.id,function(callBack){
			if(callBack!=undefined && callBack!=''){
				$scope.indice=true;
				$scope.visiteRec=callBack;
			}else{
				$scope.indice=false;
			}
		})
	}
	
	$scope.deleteLien=function(id){
		visiteProvider.delVisite(id,function(callBack){
			
			if(callBack!=undefined && callBack!=''){
				visiteProvider.getListVisite(function(callBack){
					$location.path('/listOfVisits');
				});
			}
		});
	}
	
	$scope.modifLien=function(visite){
		$rootScope.visiteMod=visite;
		$location.path('/updateVisit');
	}
})