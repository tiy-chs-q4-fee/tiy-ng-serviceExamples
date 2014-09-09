angular.module("httpProvider")
  .controller("httpProviderCtrl", function ($scope, $rootScope, $routeParams, $location, httpProviderSvc) {
      httpProviderSvc.getPosts().success(function (posts) {
        $scope.posts = posts;
      });

      httpProviderSvc.getPost($routeParams.postId).success(function (post) {
        $scope.singlePost = post;
        console.log($scope.singlePost);
      });

      $scope.createPost = function (post) {
        httpProviderSvc.createPost(post);
        $location.path("/httpProvider");
      };

      $scope.removePost =  function (id) {
        httpProviderSvc.deletePost(id);
      };

      $scope.editPost = function (post) {
          httpProviderSvc.updatePost(post);
          $location.path("/httpProvider");
      };

      $rootScope.$on("post:deleted", function () {
        httpProviderSvc.getPosts().success(function (posts) {
          $scope.posts = posts;
        });
      });

      $rootScope.$on("post:updated", function () {
        httpProviderSvc.getPosts().success(function (posts) {
          $scope.posts = posts;
        });
      });

      $rootScope.$on("post:added", function () {
        httpProviderSvc.getPosts().success(function (posts) {
          $scope.posts = posts;
        });
      });
  });
