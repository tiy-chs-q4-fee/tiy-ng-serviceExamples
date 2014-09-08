angular.module("tiy-restangularService")
    .controller("restangularPostsCtrl", function ($scope, $log, $rootScope, $routeParams, $location, restangularPostsSvc) {

        $scope.raPosts = restangularPostsSvc.allPosts().$object;

        $scope.singlePost = restangularPostsSvc.getPost($routeParams.id).$object;

        $scope.addPost = function (newPost) {
            restangularPostsSvc.addPost(newPost);
            $scope.newPost = {};
            $location.path("/blogRestangular");
        };

        $scope.removePost = function (post) {
            restangularPostsSvc.delete(post);
        };

        $scope.editPost = function (post) {
            restangularPostsSvc.editPost(post);
            $location.path("/blogRestangular");
        };

        $rootScope.$on("posts:updated", function () {
            $scope.raPosts = restangularPostsSvc.allPosts().$object;
            $log.info("posts be updated");
        });

        $rootScope.$on("posts:deleted", function () {
            $scope.raPosts = restangularPostsSvc.allPosts().$object;
            $log.info("posts be deleted");
        });

        $rootScope.$on("posts:added", function () {

            restangularPostsSvc.allPosts().then(function (data) {
                $scope.raPosts = data;
            });

            $log.info("posts be added");
        });

    });