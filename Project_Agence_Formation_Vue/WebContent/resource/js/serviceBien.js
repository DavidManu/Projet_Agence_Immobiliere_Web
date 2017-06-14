monApp.factory('biensProvider', function($http){
	
	var restUrl='http://localhost:8181/Projer_Agence_Formation/rest/bienWS/';
	
	var geoURL='https://maps.googleapis.com/maps/api/geocode/json?address=';
	
	function findAllProperty(calback){
		$http({
			method: 'GET',
			url: restUrl+'Biens'
		}).then(function successCalback(response){
			console.log(response.data);
			calback(response.data);
		}, function echecCalback(response){
			console.log("erreur : " + response.status + " " + response.statusText);
		});
	}
	
	function findProperty(property, calback){
		$http({
			method: 'GET',
			url: restUrl+'Bien?pId='+id
		}).then(function successCalback(response){
			console.log(response.data);
			calback(response.data);
		}, function echecCalback(response){
			console.log("erreur : " + response.status + " " + response.statusText);
		});
	}
	
	function addProperty(property, calback){
		$http({
			method: 'POST',
			url: restUrl+'addBien',
			data: angular.toJson(property),
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
	
	return {
		getListProperty:findAllProperty,
		getProperty:findProperty,
		createProperty:addProperty
		};
	
})