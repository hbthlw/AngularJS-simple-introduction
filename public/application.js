/**
 * Created by li on 15/6/3.
 */
var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'ngResource', 'example', 'user']);

mainApplicationModule.config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

mainApplicationModule.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'example/views/example.client.view.html'
        }).when('/user', {
            templateUrl: 'user/views/user.client.view.html',
            controller: 'UserController'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);

angular.element(document).ready(function () {
    angular.bootstrap(document, [mainApplicationModuleName]);
});