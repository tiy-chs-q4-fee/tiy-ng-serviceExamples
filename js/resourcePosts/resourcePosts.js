angular.module("tiy-resourceService",["ngRoute","ngResource"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/blogResource", {
                templateUrl: "views/ngResourceDemo/list.html",
                controller: "resourcePostsCtrl"
            })
            .when("/blogResourceNew", {
                templateUrl: "views/ngResourceDemo/create.html",
                controller: "resourcePostsCtrl"
            })
            .when("/blogResource/:id", {
                templateUrl: "views/ngResourceDemo/show.html",
                controller: "resourcePostsCtrl"
            })
//            .when("/blogResource/:id/edit", {
//                templateUrl: "views/ngResourceDemo/edit.html",
//                controller: "resourcePostsCtrl"
//            });

    });