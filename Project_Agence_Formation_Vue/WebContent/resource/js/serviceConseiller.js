monApp.factory('conseillerProvider', function($http){
	
	var restUrl='http://localhost:8181/Projer_Agence_Formation/rest/conseillerWS/';
	
	function findAllAdvisor(calback){
		$http({
			method: 'GET',
			url: restUrl+'conseillers'
		}).then(function successCalback(response){
			console.log(response.data);
			calback(response.data);
		}, function echecCalback(response){
			console.log("erreur : " + response.status + " " + response.statusText);
		});
	}
	
	return {
		getListAdvisor:findAllAdvisor
	};
	
})