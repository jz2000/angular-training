(function () {
    'use strict';

    var module = angular.module('chatApp.MessageList', ['chatApp.DataModel', 'dbaq.emoji', 'ngSanitize']);
        
    module.controller('MessagesController', function($scope, DataModelService) {
            $scope.messageList = 'List of Messages';
            $scope.messages = DataModelService.getMessages();
        }
    );
    
    module.directive('messagelist', [function() {
            var directive = {};
            directive.restrict = 'E'; 
            directive.templateUrl = 'components/message-list/message-list-template.html';
            directive.controller = 'MessagesController';
            directive.controllerAs = 'messagelistCtrl';
            return directive;            
    }]);
    
})();
