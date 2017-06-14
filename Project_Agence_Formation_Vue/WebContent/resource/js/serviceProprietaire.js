monApp.factory('ownerProvider', function($http) {
	
	var restPropUrl = "http://localhost:8181/Projer_Agence_Formation/rest/propWS";

	function findAllOwner(callBack) {

		$http({
			method : 'GET',
			url : restPropUrl + '/liste2',
		}).then(function successCallBack(response) {

			console.log(response.data)
			callBack(response.data);

		}), function failCallBack(response) {

			console.log("erreur : " + response.status + " "
					+ response.statusText);
		}

	} 
	function findOwner(id,callBack) {
		$http({
			method : 'GET',
			url : restPropUrl + "/prop/"+ id,
						
		}).then(function successCallBack(response) {

			console.log(response)
			callBack(response.data);

		}), function failCallBack(response) {

			console.log("erreur : " + response.status + " "
					+ response.statusText);
		}	
		
		
	}function deleteOwner(id,callBack) {
		$http({
			method : 'DELETE',
			url : restPropUrl + "/delete/"+ id,
			
		}).then(function successCallBack(response) {

			console.log(response)
			callBack(response);

		}), function failCallBack(response) {

			console.log("erreur : " + response.status + " "
					+ response.statusText);
		}	
		
		
	}function createOwner(ownerCreate, callBack) {
		$http({
			method : 'POST',
			url : restPropUrl + '/add',
			data : angular.toJson(ownerCreate),
			headers : {
				'content-Type' : 'application/json'
			}

		}).then(function successCallBack(response) {

			console.log(response.data)
			callBack(response.data);

		}), function failCallBack(response) {

			console.log("erreur : " + response.status + " "
					+ response.statusText);
		}

	
		

	}function updateOwner(ownerUpdate, callBack) {
		$http({
			method : 'PUT',
			url : restPropUrl + '/update',
			data : angular.toJson(ownerUpdate),
			headers : {
				'content-Type' : 'application/json'
			}
			
		}).then(function successCallBack(response) {

			console.log(response.data)
			callBack(response.data);

		}), function failCallBack(response) {

			console.log("erreur : " + response.status + " "
					+ response.statusText);
		}
		

	}
	return {
		findAllO : findAllOwner,
		findO : findOwner,
		deleteO : deleteOwner,
		createO : createOwner,
		updateO : updateOwner
	
	}
});