(function (_){
	var REST = "products.json";
	
	app.controller("productCtrl", function($http, $rootScope){
		var productCtrl = this;
		productCtrl.list = [];
		$http.get(REST).success(function(data){
			productCtrl.list = data;
		});
		
		productCtrl.openEditForm = function(_peca){
			$rootScope.$emit('openEditForm', _peca);
		};
		
		productCtrl.openPictureForm = function(_peca){
			alert('TODO');
			$rootScope.$emit('openPictureForm', _peca);
		};
		
		productCtrl.create = function(_peca){
			productCtrl.list.push(_peca);
			
			$http.post(REST, _peca);
		};
		
		productCtrl.update = function(_peca){
			$http.put(REST, _peca);
		};
		
		productCtrl.delete = function(_peca){
			if(confirm("Deseja excluir o produto " + _peca.codigoJcrei + "  ?"))
			{
				productCtrl.list = _.without(productCtrl.list, _peca);
				
				$http.delete(REST + "?codigoJcrei=" + _peca.codigoJcrei);
			}
		};
		
		$rootScope.$on('saveProduct', function(event, _data){
			if(_data.edit)
				productCtrl.update(_data.peca);
			else
				productCtrl.create(_data.peca);
		});
	});
	
})(_);