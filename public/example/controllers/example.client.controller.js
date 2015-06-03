/**
 * Created by li on 15/6/3.
 */
angular.module('example').controller('ExampleController', ['$scope', 'ExampleService',
    function($scope, ExampleService) {
        $scope.name = 'MEAN Application';
        
        $scope.test = ExampleService.hello;
    }
]);