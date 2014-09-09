angular.module("shoplocal")
	.factory("shoplocalservice", function  ($rootScope, $log, $routeParams) {
		var _items = [
		{
			name: "Girls Bib",
			image: "img/girls_bib.jpeg",
			description: "This bib includes designer ribbon and button.",
			price: 10
		},
		{
			name: "Zoo Animal Bib",
			image: "img/zoo_animal_bib.jpeg",
			description: "This bib includes a fun pattern with designer ribbon and button",
			price: 10
		},
		{
			name: "Zoo Animal Burp Cloth",
			image: "img/zoo_animal_burpcloth.jpeg",
			description: "This burp cloth matches our Zoo Animal Bib.",
			price: 9
		},
		{
			name: "Zoo Animal Set",
			image: "img/zoo_animal_set.JPG",
			description: "The full set for all your baby's needs.  Includes our Zoo Animal Bib, Burp Cloth, and blanket.",
			price: 35
		},
		{
			name: "Sling Purse",
			image: "img/sling_purse.jpeg",
			description: "Casual but stylish bag that will carry everything that a girl needs.  Includes inner pocket for cellphone.",
			price: 75
		},
		{
			name: "Retro Purse",
			image: "img/retro_bag.jpeg",
			description: "Fun designer bag that will be sure to get compliments from all your friends.  Includes strong magnetic snap and an inner pocket for your cellphone.",
			price: 75
		}
		];

		var _cartItems = [];

		var getItems = function () {
			return _items;
		};
		
		var addItemToCart = function (item) {
			_cartItems.push(item);
			$log.info("item:added");

		};

		var removeItemFromCart = function (idx) {
			_cartItems.splice(idx, 1);
			$log.info("item:deleted");

		}
		var findItemByIndex = function (idx) {
			return _items[idx];
		};

		var getCartItems = function () {
			return _cartItems;
		};

		return {
			getItems : getItems,
			getItem : findItemByIndex,
			addItemToCart : addItemToCart,
			removeItemFromCart : removeItemFromCart,
			getCartItems : getCartItems
		}
	})

	 