/**
 * Created by li on 15/6/4.
 */
angular.module('user').factory('UserService', ['$resource',
    function ($resource) {
        return $resource('/users/:name', {name: '@name'}, {
            update: {method: 'PUT'},
            add: {method: 'POST', params: {name: ''}}
        });
    }
]);