(function () {
    "use strict";

    var module = angular.module("chatApp.UserList", []);
    
    module.dataUsers = generateUsers();
    
    function generateUsers() {
        var users = [];
        for (var i = 0; i < 100; i++) {
            users.push({
                userId: i,
                userName: 'User #' + i
            });
        }
        return users;
    }
    
    module.controller('UsersController', ['$scope', function($scope) {
            $scope.userList = 'List of Users';
            $scope.users = module.dataUsers;
        }
    ]);
    
    module.directive('userlist', [function() {
            var directive = {};
            directive.restrict = 'E'; 
            directive.templateUrl = 'components/user-list/user-list-template.html';
            directive.controller = 'UsersController';
            return directive;            
    }]);
    
})();
