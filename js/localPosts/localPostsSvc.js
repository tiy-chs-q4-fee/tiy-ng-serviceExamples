angular.module("tiy-localService")
    .factory("localPostsSvc", function ($rootScope) {
        var _posts = [
            {
                title: "Sample Post",
                content: "This is sample content coming from a non creative mind."
            }
        ];

        var getPosts = function () {
            return _posts;
        };

        var addPost = function (newPost) {
            _posts.push(newPost);
            $rootScope.$broadcast("post:added");
        };

        var updatePost = function (idx, post) {
            _posts[idx] = post;
            $rootScope.$broadcast("post:updated")
        };

        var deletePost = function (idx) {
            _posts.splice(idx, 1);
            $rootScope.$broadcast("post:deleted");
        };

        var findPostByIdx = function (idx) {
            return _posts[idx];
        };

        return {
            getPosts: getPosts,
            getPost: findPostByIdx,
            addPost: addPost,
            updatePost: updatePost,
            deletePost: deletePost

        };
    });