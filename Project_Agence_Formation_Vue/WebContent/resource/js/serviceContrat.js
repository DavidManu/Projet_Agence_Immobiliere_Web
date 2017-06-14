monApp.factory('contratProvider',function($http){
	
	var restContratUrl='http://localhost:8181/Projer_Agence_Formation/rest/contratWS/';
	
	function findAllContrat(callBack){
		$http({
			method: 'GET',
			url: restContratUrl+'liste'
		}).then(function successCallBack(response){
			console.log(response.data);
			callBack(response.data);
		}, function echecCallBack(response){
			console.log("Erreur: "+response.status+" "+response.statusText);
		});
	}
	function addContrat(contratAdd, callBack){
		$http({
			method: 'POST', 
			url: restContratUrl+'ajout',
			data: angular.toJson(contratAdd),
			headers: {
				'content-Type':'application/json'
			}
		}).then(function successCallBack(response){
			console.log(response.data);
			callBack(response.data);
		}, function echecCallBack(response){
			console.log("Erreur: "+response.status+" "+response.statusText);
		});
	}
	
	function updateContrat(contratUpdate, callBack){
		$http({
			method:'PUT',
			url: restContratUrl+'modif',
			data: angular.toJson(contratUpdate),
			headers: {
				'content-Type':'application/json'
			}
		}).then(function successCallBack(response){
			console.log(response.data);
			callBack(response.data);
		},function echecCallBack(response){
			console.log("Erreur: "+response.status+" "+response.statusText);
		})
	}
	
	function deleteContrat(id,callBack){
		$http({
			method:'DELETE',
			url:restContratUrl+'supprimer/'+id
		}).then(function successCallBack(response){
			console.log(response);
			callBack(response);
		},function echecCallBack(response){
			console.log("Erreur: "+response.status+" "+response.statusText)
		});
	}
	
	function findContrat(id,callBack){
		$http({
			method:'GET',
			url:restContratUrl+'contrat/'+id
		}).then(function successCallBack(response) {
			console.log(response.data);
			callBack(response.data);
		},function echecCallBack(response) {
			console.log("Erreur: "+response.status+" "+response.statusText);
		});
	}
	
	return {
		getListContrat:findAllContrat,
		createContrat:addContrat,
		majContrat:updateContrat,
		delContrat:deleteContrat,
		getContratById:findContrat
	};
	
})