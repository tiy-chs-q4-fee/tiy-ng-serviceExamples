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


angular.module("tiy-cookieService",["ngCookies"]);
angular.module("tiy-resourceService",["ngResource"]);

angular.module("tiy-restangularService",["restangular"]);