angular.module("tiy-resourceService")
    .factory('resourcePostsSvc', function($resource) {
        return $resource('http://tiy-fee-rest.herokuapp.com/collections/crud-demo',
            {},
            {
                query: { method: 'GET', isArray: true },
                create: { method: 'POST'}
            });
    })
    .factory('resourcePostSvc', function($resource) {
        return $resource('http://tiy-fee-rest.herokuapp.com/collections/crud-demo/:id',
            {
                id: '@_id'
            },
            {
                show: { method: 'GET'},
                edit: { method: 'PUT'},
                delete: { method: 'DELETE'}
            }
        )
    });