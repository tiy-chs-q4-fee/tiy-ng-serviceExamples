angular.module("tiy-resourceService")
    .controller("resourcePostsCtrl", function ($scope, resourcePostsSvc, resourcePostSvc, $routeParams, $location) {


        $scope.posts = resourcePostsSvc.query();

        $scope.post = resourcePostSvc.show({ id: $routeParams.id });




        console.log($scope.post);
        $scope.createPost = function (post) {
            resourcePostsSvc.create(post);
            $location.path("/blogResource");
        }
        
        $scope.deletePost = function (post) {

            resourcePostSvc.delete({id: post._id}, function () {

                $scope.posts.forEach(function(p, index) {
                    if (p._id == id) $scope.posts.splice(index, 1);
                });

            });
        };

        $scope.updatePost = function (post) {

            resourcePostSvc.edit(post._id);
            $location.path("/blogResource");
        }




    });