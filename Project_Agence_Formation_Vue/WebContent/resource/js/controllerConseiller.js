monApp

.controller('connexionController', function($scope, conseillerProvider, $rootScope, $location, $window) {
	$rootScope.indiceCo=false;
	$scope.error=false;
	console.log("indice au debut : "+$rootScope.indiceCo);
	$scope.connexion=function(identifiant, mdp) {
		conseillerProvider.getListAdvisor(function(calback){
			$scope.listeConseillers=calback;
		});
		$scope.k=0;
		var i=0;
		for (var b in $scope.listeConseillers) {
			if (($scope.listeConseillers[i].identifiant==identifiant)&&($scope.listeConseillers[i].mdp==mdp)) {
				$scope.k=1;
				break;
			}
			else {
				$scope.k=0;
			}
			i++;
		}
		if ($scope.k==1) {
			$rootScope.indiceCo=true;
			$rootScope.conseillerID=$scope.listeConseillers[i].id;
			$rootScope.conseillerMail=$scope.listeConseillers[i].mail;
			$location.path('/listOfProperty');
		}
		else {
			$rootScope.indiceCo=false;
			$scope.error=true;
		}
	}
})