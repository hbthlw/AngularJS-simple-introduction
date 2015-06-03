/**
 * Created by li on 15/6/3.
 */
angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'example/views/example.client.view.html'
            }).otherwise({
                redirectTo: '/'
            }); 
    }
]);