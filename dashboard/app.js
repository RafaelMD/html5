(function (){
	var app = angular.module("dashboard",[]);

	app.controller("menuCtrl", function($rootScope){
		var menuCtrl = this;
		menuCtrl.current = 1;
		menuCtrl.pages = [{name:"Peças",id:1},{name:"Adicionar Peça", id:2}];
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
			$rootScope.$emit('changePage',3);
		};
		
		productCtrl.delete = function(_numeroJcrei){
			var ok = confirm("Deletar ?");
		};
	});
	
	app.controller("productFormCtrl", function($http, $rootScope){
		var form = this;
	});
	
	app.controller("productEditCtrl", function($http, $rootScope){
		var editForm = this;
	});
	
})();