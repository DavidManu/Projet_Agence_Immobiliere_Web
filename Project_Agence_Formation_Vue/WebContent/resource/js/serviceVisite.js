monApp.factory('visiteProvider',function($http){
	
	var restVisiteUrl='http://localhost:8181/Projer_Agence_Formation/rest/visiteWS/';
	
	function findAllVisite(callBack){
		$http({
			method: 'GET',
			url: restVisiteUrl+'liste'
		}).then(function successCallBack(response){
			console.log(response.data);
			callBack(response.data);
		}, function echecCallBack(response){
			console.log("Erreur: "+response.status+" "+response.statusText);
		});
	}
	function addVisite(visiteAdd, callBack){
		$http({
			method: 'POST', 
			url: restVisiteUrl+'ajout',
			data: angular.toJson(visiteAdd),
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
	
	function updateVisite(visiteUpdate, callBack){
		$http({
			method:'PUT',
			url: restVisiteUrl+'modif',
			data: angular.toJson(visiteUpdate),
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
	
	function deleteVisite(id,callBack){
		$http({
			method:'DELETE',
			url:restVisiteUrl+'supprimer/'+id
		}).then(function successCallBack(response){
			console.log(response);
			callBack(response);
		},function echecCallBack(response){
			console.log("Erreur: "+response.status+" "+response.statusText)
		});
	}
	
	function findVisite(id,callBack){
		$http({
			method:'GET',
			url:restVisiteUrl+'visite/'+id
		}).then(function successCallBack(response) {
			console.log(response.data);
			callBack(response.data);
		},function echecCallBack(response) {
			console.log("Erreur: "+response.status+" "+response.statusText);
		});
	}
	
	return {
		getListVisite:findAllVisite,
		createVisite:addVisite,
		majVisite:updateVisite,
		delVisite:deleteVisite,
		getVisiteById:findVisite
	};
	
})