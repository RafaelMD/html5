(function (){
	
	app.controller("productCtrl", function($http, $rootScope){
		var productCtrl = this;
		productCtrl.list = [];
		$http.get("products.json").success(function(data){
			productCtrl.list = data;
		});
		
		productCtrl.edit = function(_peca){
			$rootScope.$emit('editProduct', _peca);
		};
		
		productCtrl.delete = function(_peca){
			var ok = confirm("Deletar ?");
		};
		
		$rootScope.$on('addProduct', function(event, _peca){
			productCtrl.list.push(_peca);
		});
	});
	
})();