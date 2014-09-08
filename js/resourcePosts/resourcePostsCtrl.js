angular.module("tiy-resourceService")
    .controller("resourcePostsCtrl", function ($scope, resourcePostsSvc, $routeParams, $location) {
        $scope.posts = [];
        $scope.singlePost = {};
        resourcePostsSvc.query(function (posts) {
            $scope.posts = posts;
        });

        resourcePostsSvc.get({id: $routeParams.id}, function (post) {
            $scope.singlePost = post;
        })


    });