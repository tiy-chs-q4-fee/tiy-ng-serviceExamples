angular.module("tiy-httpService")
    .controller("httpPostsCtrl", function ($scope, $rootScope, $location, $routeParams,$log, httpPostsSvc) {

       httpPostsSvc.getPosts().then(function (posts) {
          $log.info(posts);
           $scope.posts = posts.data;

        });

        httpPostsSvc.getPost($routeParams.id).then(function (response) {
            $scope.singlePost = response.data;

        });

        $scope.addPost = function (post) {
            httpPostsSvc.addPost(post).then(function () {
                $location.path("/blogHttp");
            });

        };

        $scope.editPost = function (post) {
            httpPostsSvc.updatePost(post).then(function () {
                $location.path("/blogHttp");
            });
        };

        $scope.deletePost = function (id) {
            httpPostsSvc.removePost(id).then(function () {
                $location.path("/blogHttp");
            })
        }

    });
