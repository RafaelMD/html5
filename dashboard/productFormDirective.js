(function (){
	
	app.directive("productForm", function($rootScope){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: "form-product.html",
			link: function (scope, element, attr) {
				scope.title = attr.title;
				scope.edit = attr.edit == "true";
				scope.peca = {};
				
				scope.edit && $rootScope.$on('editProduct', function(event, _peca){
					$rootScope.$emit('changePage',3);
					scope.peca = _peca;
				});
			},
			controller: function($scope) {
				this.save = function(){
					console.log($scope);
					!$scope.edit && $rootScope.$emit('addProduct', $scope.peca);
				};
			},
			controllerAs: "form"
		};
	});
	
})();