/**
 * Created by li on 15/6/3.
 */
angular.module('example').service('ExampleService', [
    function () {
        this.someValue = true;
        this.hello = 'world';
        this.firstMethod = function () {
        };
        this.secondMethod = function () {
        };
    }
]);