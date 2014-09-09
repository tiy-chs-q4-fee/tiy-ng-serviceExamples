angular.module("httpProvider", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/httpProvider", {
        templateUrl: "views/httpProvider/list.html",
        controller: "httpProviderCtrl"
      })
      .when("/httpProvider/new", {
        templateUrl: "views/httpProvider/create.html",
        controller: "httpProviderCtrl"
      })
      .when("/httpProvider/:postId", {
        templateUrl: "views/httpProvider/show.html",
        controller: "httpProviderCtrl"
      })
      .when("/httpProvider/:postId/edit", {
        templateUrl: "views/httpProvider/edit.html",
        controller: "httpProviderCtrl"
      });

  });
