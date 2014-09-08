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

        .when("/blogCookie", {
            templateUrl: "views/cookieDemo/list.html",
            controller: "cookiePostsCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });
});


angular.module("tiy-cookieService",["ngCookies"]);
