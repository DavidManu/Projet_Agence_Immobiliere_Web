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
	if($rootScope.visiteMod==null){
	$scope.updVisiteForm={
			dateVisite:undefined,
			clientAccepte:undefined,
			conseillerAccepte:undefined,
			Conseiller:{
				id:undefined
			}
	}
	}else{
		$scope.updVisiteForm={
				dateVisite:$rootScope.visiteMod.dateVisite,
				clientAccepte:$rootScope.visiteMod.clientAccepte,
				conseillerAccepte:$rootScope.visiteMod.conseillerAccepte,
				Conseiller:{
					id:$rootScope.visiteMod.conseiller.id
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
$scope.suppVisite=function(){
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
					$scope.listeVisite=callBack;
				});
			}
		});
	}
	
	$scope.modifLien=function(visite){
		$rootScope.visiteMod=visite;
		$location.path('/updateVisit');
	}
})