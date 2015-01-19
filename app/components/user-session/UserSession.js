(function () {
    'use strict';

    var module = angular.module('chatApp.UserSession', ['chatApp.DataModel']);
        
    module.controller('LoginController', function($scope, DataModelService) {
            $scope.isLoggedIn = function() {
                return DataModelService.isLoggedIn();
            };
            $scope.userName = '';
            $scope.password = '';
            $scope.login = function() {
                DataModelService.setActiveUser($scope.userName, $scope.password);
                $scope.userName = '';
                $scope.password = '';
            };
        }
    );
    
    module.directive('login', [function() {
            var directive = {};
            directive.restrict = 'E'; 
            directive.templateUrl = 'components/user-session/login-template.html';
            directive.controller = 'LoginController';
            directive.controllerAs = 'loginCtrl';
            return directive;            
    }]);

})();
