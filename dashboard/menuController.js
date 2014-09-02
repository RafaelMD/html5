(function (){

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
	
})();