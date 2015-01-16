(function () {
    "use strict";

    var module = angular.module("chatApp.MessageList", []);
    
    module.dataUsers = generateUsers();
    module.dataMessages = generateMessages();
    
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
    
    function generateMessages() {
        var messages = [];
        for (var i = 0; i < 100; i++) {
            for (var j = 0; j < 10; j++) {
                messages.push({
                    messageId: i * 100 + j,
                    user: getUserById(i),
                    messageText: 'Message #' + j + ' from user #' + i,
                    messageDate : new Date()
                });
            }
        }
        return messages;
    }
    
    function getUserById(userId) {
        for (var i = 0; i < module.dataUsers.length; i++) {
            if (module.dataUsers[i].userId === userId) {
                return module.dataUsers[i];
            }
        }
        return null;
    }
    
    module.controller('UsersController', ['$scope', function($scope) {
            $scope.userList = 'List of Users';
            $scope.users = module.dataUsers;
        }
    ]);
    
    module.controller('MessagesController', ['$scope', function($scope) {
            $scope.messageList = 'List of Messages';
            $scope.messages = module.dataMessages;
        }
    ]);
    
    module.directive('messagelist', [function() {
            var directive = {};
            directive.restrict = 'E'; 
            directive.templateUrl = 'components/message-list/message-list-template.html';
            directive.controller = 'MessagesController';
            return directive;            
    }]);
    
})();
