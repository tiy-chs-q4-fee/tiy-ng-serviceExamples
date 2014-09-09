angular.module("tiy-localService",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/blogLocal", {
                templateUrl: "views/localSvcDemo/list.html",
                controller: "localPostsCtrl"
            })
            .when("/blogLocal/new", {
                templateUrl: "views/localSvcDemo/create.html",
                controller: "localPostsCtrl"
            })
            .when("/blogLocal/:index", {
                templateUrl: "views/localSvcDemo/show.html",
                controller: "localPostsCtrl"
            })
            .when("/blogLocal/:index/edit", {
                templateUrl: "views/localSvcDemo/edit.html",
                controller: "localPostsCtrl"
            });

    });
