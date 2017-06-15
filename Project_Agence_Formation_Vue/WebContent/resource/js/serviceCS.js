monApp.factory('csProvider', function($http){
	
	var restUrl='http://localhost:8181/Projer_Agence_Formation/rest/ClasseStandardWS/';
	
	function addCs(cs, calback){
		$http({
			method: 'POST',
			url: restUrl+'createclassestandard',
			data: angular.toJson(cs),
			header: {
				'content-Type':'application/json'
			}
		}).then(function successCalback(response){
			console.log(response.data);
			calback(response.data);
		}, function echecCalback(response){
			console.log("erreur : " + response.status + " " + response.statusText);
		});
	}
	
	function updateCs(cs, calback){
		$http({
			method: 'PUT',
			url: restUrl+'updateclassestandard',
			data: angular.toJson(cs),
			header: {
				'content-Type':'application/json'
			}
		}).then(function successCalback(response){
			console.log(response.data);
			calback(response.data);
		}, function echecCalback(response){
			console.log("erreur : " + response.status + " " + response.statusText);
		});
	}
	
	function deleteCs(id, calback){
		$http({
			method: 'DELETE',
			url: restUrl+'deleteclassestandard/'+id
		}).then(function successCalback(response){
			console.log(response);
			calback(response);
		}, function echecCalback(response){
			console.log("erreur : " + response.status + " " + response.statusText);
		});
	}
	
	return{
		createCs:addCs,
		changeCs:updateCs,
		removeCs:deleteCs
	}
		
})