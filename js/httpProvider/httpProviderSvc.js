angular.module("httpProvider")
  .factory("httpProviderSvc", function ($http, $rootScope, $log) {

    var baseUrl = "http://tiy-fee-rest.herokuapp.com/collections/httpPosts";

    // GET /collections/httpPosts
    var getPosts = function () {
      return $http.get(baseUrl);

    };

    // GET /collections/httpPosts/:id
    var getPost = function (id) {
      return $http.get(baseUrl + "/" + id);

    };

    // POST /collections/httpPosts
    var createPost = function (post) {
      $http.post(baseUrl, post).then(function (response) {
        $rootScope.$broadcast("post:added");
        $log.info("post be added");
      });


    };

    // DELETE /collections/httpPosts/:id
    var deletePost = function (id) {

      $http.delete(baseUrl + "/" + id).then(function (response) {
        $rootScope.$broadcast("post:deleted");
        $log.warn("you got rid of a post, yo.")
      });

    };

    // DELETE /collections/httpPosts/:id
    var updatePost = function (post) {
      $http.put(baseUrl + "/" + post._id, post).then(function (response) {
        $rootScope.$broadcast("post:updated");
        $log.info("post:updated");

      });
    };

    return {
      getPosts: getPosts,
      getPost: getPost,
      createPost: createPost,
      deletePost: deletePost,
      updatePost:updatePost
    };

  });
