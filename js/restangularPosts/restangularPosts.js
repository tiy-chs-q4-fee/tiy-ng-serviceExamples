angular.module("tiy-restangularService",["restangular", "ngRoute"])
    .config(function ($routeProvider, RestangularProvider) {

        RestangularProvider.setBaseUrl("http://tiy-fee-rest.herokuapp.com/collections");
        RestangularProvider.setRestangularFields({id: '_id'});

        $routeProvider
            .when("/blogRestangular", {
                templateUrl: "views/restangularDemo/list.html",
                controller: "restangularPostsCtrl"
            })
            .when("/blogRestangular/:id", {
                templateUrl: "views/restangularDemo/show.html",
                controller: "restangularPostsCtrl"
            })
            .when("/blogRestangular/:id/edit", {
                templateUrl: "views/restangularDemo/edit.html",
                controller: "restangularPostsCtrl"
            })
            .when("/restangularblog/new", {
                templateUrl: "views/restangularDemo/create.html",
                controller: "restangularPostsCtrl"
            });

    });