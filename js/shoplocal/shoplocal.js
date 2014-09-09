angular.module("shoplocal", ["ngRoute"])
	.config(function ($routeProvider) {
		$routeProvider
			.when("/list", {
				templateUrl : "views/shoplocal/list.html",
				controller : "shoplocalcontrols"
			})
			.when("/item/:indexOfItem", {
				templateUrl : "views/shoplocal/item.html",
				controller : "shoplocalcontrols"
			})
			.when("/cart", {
				templateUrl : "views/shoplocal/cart.html",
				controller : "shoplocalcontrols"
			});
	});