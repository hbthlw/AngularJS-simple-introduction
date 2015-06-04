/**
 * Created by li on 15/6/4.
 */
angular.module('user').controller('UserController', ['$scope',
    function ($scope) {
        $scope.users = [
            {name: 'li', age: 18},
            {name: 'wang', age: 38},
            {name: 'liu', age: 27}
        ];

        $scope.add = function () {
            alert(JSON.stringify($scope.user));
        }
    }
]);