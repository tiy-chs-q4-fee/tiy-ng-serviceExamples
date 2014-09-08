angular.module("tiy-resourceService")
    .factory("resourcePostsSvc", function ($resource) {
        return $resource("http://tiy-fee-rest.herokuapp.com/collections/crud-demo/:id", null, { getPosts: { method: "GET", isArray: true}});
    });