monApp
		.factory(
				'CustomerProvider',
				function($http) {

					var restPropUrl = "http://localhost:8181/Projer_Agence_Formation/rest/clientWS";

					function findAllCustomer(callBack) {

						$http({
							method : 'GET',
							url : restPropUrl + '/liste2' 
						}).then(function successCallBack(response) {

							console.log(response.data)
							callBack(response.data);

						}), function failCallBack(response) {

							console.log("erreur : " + response.status + " "
									+ response.statusText);
						}

					}
					function findCustomer(id, callBack) {
						$http({
							method : 'GET',
							url : restPropUrl + "/Client/" + id

						}).then(function successCallBack(response) {

							console.log(response)
							callBack(response.data);

						}), function failCallBack(response) {

							console.log("erreur : " + response.status + " "
									+ response.statusText);
						}

					}
					function deleteCustomer(id, callBack) {
						$http({
							method : 'DELETE',
							url : restPropUrl + "/supprimer/" + id 

						}).then(function successCallBack(response) {

							console.log(response)
							callBack(response);

						}), function failCallBack(response) {

							console.log("erreur : " + response.status + " "
									+ response.statusText);
						}

					}
					function createCustomer(CustomerCreate, callBack) {
						$http({
							method : 'POST',
							url : restPropUrl + '/ajout',
							data : angular.toJson(CustomerCreate),
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
					function updateCustomer(CustomerUpdate, callBack) {
						$http({
							method : 'PUT',
							url : restPropUrl + '/modif',
							data : angular.toJson(CustomerUpdate),
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
						findAllC : findAllCustomer,
						findC : findCustomer,
						deleteC : deleteCustomer,
						createC : createCustomer,
						updateC : updateCustomer

					}
				});