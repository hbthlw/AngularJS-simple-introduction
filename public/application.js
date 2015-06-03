/**
 * Created by li on 15/6/3.
 */
var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, ['example']);
angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});