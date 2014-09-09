angular.module("shoplocal")
.controller("shoplocalcontrols", function  ($rootScope, $scope, $routeParams, $location, shoplocalservice) {
	
	$scope.items = shoplocalservice.getItems();

	$scope.singleItem = shoplocalservice.getItem($routeParams.indexOfItem);

	$scope.addItemToCart = function (item) {
            shoplocalservice.addItemToCart(item);
            $location.path("/cart");
        };

    $scope.cartItems = shoplocalservice.getCartItems();

    $scope.removeItemFromCart = function  (idx) {
    	shoplocalservice.removeItemFromCart(idx)
    	$location.path("/cart");
    }

});