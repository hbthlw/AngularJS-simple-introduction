/**
 * Created by li on 15/6/3.
 */
var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, []);
angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});