(function () {
    'use strict';

    var module = angular.module('chatApp.UserList', ['chatApp.DataModel']);
    
    module.controller('UsersController', function($scope, DataModelService) {
            $scope.userList = 'List of Users';
            $scope.users = DataModelService.getUsers();
        }
    );
    
    module.directive('userlist', [function() {
            var directive = {};
            directive.restrict = 'E'; 
            directive.templateUrl = 'components/user-list/user-list-template.html';
            directive.controller = 'UsersController';
            directive.controllerAs = 'userlistCtrl';
            return directive;            
    }]);
    
})();
