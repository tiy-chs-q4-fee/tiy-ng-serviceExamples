angular.module("tiy-restangularService")
    .factory("restangularPostsSvc", function (Restangular, $rootScope) {
        var _postsService = Restangular.all("posts");



        // GET /collections/posts
        var getAll = function () {
            return _postsService.getList();
        };

        // GET /collection/posts/:id
        var getOne = function (id) {
           return Restangular.one("posts", id).get();
        }

        // POST /collections/posts
        var addPost = function (newpost) {
            _postsService.post(newpost).then(function () {
                $rootScope.$broadcast("posts:added");
            });
        };

        // PUT /collections/posts/:id
        var editPost = function (post) {
//              Restangular.one("posts", post._id).put().then(function () {
//                  $rootScope.$broadcast("posts:updated");
//              })
            post.save().then(function () {
                $rootScope.$broadcast("posts:updated");
            })
        };

        // DELETE /collections/posts/:id
        var removePost = function (post) {
            post.remove().then(function () {
                $rootScope.$broadcast("posts:deleted");
            })
        };


        // public methods for this service
        return {
            allPosts: getAll,
            getPost: getOne,
            addPost: addPost,
            editPost: editPost,
            delete: removePost
        };
    });