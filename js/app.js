 angular.module("tiy-ng-serviceDemo",
    ["tiy-localService",
     "tiy-cookieService",
     "tiy-resourceService",
     "tiy-restangularService",
     "tiy-httpService",
     "ngRoute"
     ])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })
        .when("/blogLocal", {
            templateUrl: "views/localSvcDemo/list.html",
            controller: "localPostsCtrl"
        })
        .when("/blogLocal/new", {
            templateUrl: "views/localSvcDemo/create.html",
            controller: "localPostsCtrl"
        })
        .when("/blogLocal/:idx", {
            templateUrl: "views/localSvcDemo/show.html",
            controller: "localPostsCtrl"
        })
        .when("/blogLocal/:idx/edit", {
            templateUrl: "views/localSvcDemo/edit.html",
            controller: "localPostsCtrl"
        })
        .when("/blogHttp", {
            templateUrl: "views/httpDemo/list.html",
            controller: "httpPostsCtrl"
        })
        .when("/blogResource", {
            templateUrl: "views/ngResourceDemo/list.html",
            controller: "resourcePostsCtrl"
        })
        .when("/blogRestangular", {
            templateUrl: "views/restangularDemo/list.html",
            controller: "restangularPostsCtrl"
        })
        .when("/blogCookie", {
            templateUrl: "views/cookieDemo/list.html",
            controller: "cookiePostsCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });
});

angular.module("tiy-localService",[]);
angular.module("tiy-cookieService",["ngCookies"]);
angular.module("tiy-resourceService",["ngResource"]);
angular.module("tiy-httpService",[]);
angular.module("tiy-restangularService",["restangular"]);