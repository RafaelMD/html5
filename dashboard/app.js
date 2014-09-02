(function (){
	var app = angular.module("dashboard",[]);

	app.controller("menuCtrl", function($rootScope){
		var menuCtrl = this;
		menuCtrl.current = 1;
		menuCtrl.pages = [{name:"Peças",id:1},{name:"Adicionar Peça", id:3}];
		menuCtrl.changePage = function(_page){
			menuCtrl.current = _page;
		};
		
		$rootScope.$on('changePage', function(event, data){
            menuCtrl.changePage(data);
        });
	});
	
	app.controller("productCtrl", function($http, $rootScope){
		var productCtrl = this;
		productCtrl.list = [];
		$http.get("products.json").success(function(data){
			productCtrl.list = data;
		});
		
		productCtrl.edit = function(_numeroJcrei){
			$rootScope.$emit('changePage',2);
			$rootScope.$emit('editProduct');
		}
	});
	
	app.controller("productFormCtrl", function($http, $rootScope){
		var form = this;
		form.add = true;
		
		$rootScope.$on('editProduct', function(event){
            form.add = false;
        });
		
		$rootScope.$on('addProduct', function(event){
            form.add = true;
        });
	});
})();