angular.module("tiy-localService")
    .controller("localPostsCtrl", function ($rootScope, $scope, $routeParams, $location, localPostsSvc) {

        $scope.posts = localPostsSvc.getPosts();

        $scope.singlePost = localPostsSvc.getPost($routeParams.index);
        console.log("single post",$scope.singlePost);
        $scope.addPost = function (post) {
            localPostsSvc.addPost(post);
            $location.path("/blogLocal");
        };

        $scope.editPost = function (post) {
            var idx = $routeParams.idx;
            localPostsSvc.updatePost(idx, post);
            $location.path("/blogLocal");
        };

        $scope.removePost = function (idx) {
            localPostsSvc.deletePost(idx);
        };

        $rootScope.$on("post:added", function () {
            $scope.posts = localPostsSvc.getPosts();

        });

        $rootScope.$on("post:updated", function () {
            $scope.posts = localPostsSvc.getPosts();

        });

        $rootScope.$on("post:deleted", function () {
            $scope.posts = localPostsSvc.getPosts();

        });

    });
