angular.module("tiy-httpService")
    .factory("httpPostsSvc", function ($http, $rootScope, $log) {

        var urlBase = "http://tiy-fee-rest.herokuapp.com/collections/httpBlog";

        var getPosts = function() {

            return $http.get(urlBase);

        };

        var getPost = function (id) {
            return $http.get(urlBase + "/" + id);
        };

        var addPost = function (post) {
            return $http.post(urlBase, post).then(function (response) {
                $rootScope.$broadcast("post:added");
                $log.info("post:added");
            });
        };

        var updatePost = function (post) {
            return $http.put(urlBase + "/" + post._id, post).then(function (response) {
                $rootScope.$broadcast("post:updated");
                $log.info("post:updated");
            });
        };

        var deletePost = function (id) {
            return $http.delete(urlBase + "/" + id).then(function (response) {
                $rootScope.$broadcast("post:deleted");
                $log.info("post:deleted");
            });
        };

        return {
            getPosts: getPosts,
            getPost: getPost,
            addPost: addPost,
            updatePost: updatePost,
            removePost: deletePost
        };

    });
