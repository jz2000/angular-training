(function () {
    'use strict';

    var module = angular.module('chatApp.DataModel', []);
    
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
    
    function generateMessages(users) {
        var messages = [];
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            for (var j = 0; j < 10; j++) {
                messages.push({
                    messageId: i * 100 + j,
                    user: user,
                    messageText: 'Message #' + j + ' from User #' + i,
                    messageDate : new Date()
                });
            }
        }
        return messages;
    }
    
    module.service('DataModelService', function() {
        var self = this;
        this.users = generateUsers();
        this.messages = generateMessages(this.users);
        this.getUsers = function() {
            return self.users;
        };
        this.getMessages = function() {
            return self.messages;
        };
    });
    
})();
