monApp.factory('biensProvider', function($http){
	
	var restUrl='http://localhost:8181/Projer_Agence_Formation/rest/bienWS/';
	
	var restUrlcs='http://localhost:8181/Projer_Agence_Formation/rest/ClasseStandardWS/';
	
//	var geoURL='https://maps.googleapis.com/maps/api/geocode/json?address=';
	
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
	
	function findAllPropertyByCategory(id, calback){
		$http({
			method: 'GET',
			url: restUrl+'BiensIDca?pId='+id
		}).then(function successCalback(response){
			console.log(response.data);
			calback(response.data);
		}, function echecCalback(response){
			console.log("erreur : " + response.status + " " + response.statusText);
		});
	}
	
	function findAllcs(calback){
		$http({
			method: 'GET',
			url: restUrlcs+'liste'
		}).then(function successCalback(response){
			console.log(response.data);
			calback(response.data);
		}, function echecCalback(response){
			console.log("erreur : " + response.status + " " + response.statusText);
		});
	}
	
	function findProperty(id, calback){
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
			url: restUrl+'addBien/',
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
	
	function updateProperty(property, calback){
		$http({
			method: 'PUT',
			url: restUrl+'updateBien/',
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
	

	
	function deleteProperty(id, calback){
		$http({
			method: 'DELETE',
			url: restUrl+'deleteBien?pId='+id
		}).then(function successCalback(response){
			console.log(response);
			calback(response);
		}, function echecCalback(response){
			console.log("erreur : " + response.status + " " + response.statusText);
		});
	}
	
	return {
		getListProperty:findAllProperty,
		getAllPropertyByCategory:findAllPropertyByCategory,
		getListcs:findAllcs,
		getProperty:findProperty,
		createProperty:addProperty,
		changeProperty:updateProperty,
		removeProperty:deleteProperty
		};
	
})