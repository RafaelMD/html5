(function (){
	var app = angular.module("dashboard",[]);

	app.controller("menuCtrl", function(){
		var menuCtrl = this;
		menuCtrl.current = 1;
		menuCtrl.pages = [{name:"Peças",id:1},{name:"Adicionar Peça", id:3}];
		menuCtrl.changePage = function(_page){
			menuCtrl.current = _page;
		};
	});
	
	app.controller("productCtrl", function($http){
		var productCtrl = this;
		productCtrl.list = [];
		$http.get("products.json").success(function(data){
			productCtrl.list = data;
		});
	});
	
	app.controller("productFormCtrl", function($http){
		var form = this;
		form.add = true;
	});
})();