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
                    messageId: messages.length,
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
        this.activeUser = null;
        this.users = generateUsers();
        this.messages = generateMessages(this.users);
        this.isLoggedIn = function() {
            return (self.activeUser !== null);
        };
        this.getActiveUser = function() {
            return self.activeUser;
        };
        this.setActiveUser = function(userName, password) {
            self.activeUser = {
                userId: self.users.length,
                userName: userName
            };
            self.users.push(self.activeUser);
        };
        this.getUsers = function() {
            return self.users;
        };
        this.getMessages = function() {
            return self.messages;
        };
        this._getNextMessageId = function() {
            return this.messages.length;
        };
        this.postMessage = function(messageText) {
            self.messages.push({
                messageId: self._getNextMessageId(),
                user: self.activeUser,
                messageText: messageText,
                messageDate : new Date()
            });
        };
    });
    
})();
