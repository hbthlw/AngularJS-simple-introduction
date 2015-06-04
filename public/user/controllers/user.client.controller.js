/**
 * Created by li on 15/6/4.
 */
angular.module('user').controller('UserController', ['$scope', 'UserService',
    function ($scope, UserService) {
        $scope.users = UserService.query();//query是$resource的一个默认动作

        $scope.add = function () {
            var user = {name: $scope.user.name, age: $scope.user.age};
            UserService.add(user, function (response) {
                $scope.users.push(user);
            }, function (response) {
                alert('fail');
            });
        };

        //失败之后才和服务器同步，使页面响应更快。（看起来）
        $scope.del = function (name, index) {
            $scope.users.splice(index, 1)
            UserService.remove({name: name}, function (response) {

            }, function (response) {
                $scope.users = UserService.query();
            });
        };

        //添加完成之后重新获取，可以使页面中和服务器保持一致。
        $scope.update = function () {
            UserService.update({name: 'li', age: 16}, function (response) {
                $scope.users = UserService.query();
            }, function (response) {
                alert('fail');
            });
        }

    }
]);