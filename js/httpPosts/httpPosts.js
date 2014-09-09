angular.module("tiy-httpService",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/blogHttp", {
                templateUrl: "views/httpDemo/list.html",
                controller: "httpPostsCtrl"
            })
            .when("/blogHttp/:id", {
                templateUrl: "views/httpDemo/show.html",
                controller: "httpPostsCtrl"
            })
            .when("/httpSvc/new", {
                templateUrl: "views/httpDemo/create.html",
                controller: "httpPostsCtrl"
            })
            .when("/blogHttp/:id/edit", {
                templateUrl: "views/httpDemo/edit.html",
                controller: "httpPostsCtrl"
            });

    });
