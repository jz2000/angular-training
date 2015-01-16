(function () {
    'use strict';

    var module = angular.module('chatApp.MessageList', ['chatApp.DataModel']);
        
    module.controller('MessagesController', function($scope, DataModelService) {
            $scope.messageList = 'List of Messages';
            $scope.messages = DataModelService.getMessages();//module.dataMessages;
        }
    );
    
    module.directive('messagelist', [function() {
            var directive = {};
            directive.restrict = 'E'; 
            directive.templateUrl = 'components/message-list/message-list-template.html';
            directive.controller = 'MessagesController';
            return directive;            
    }]);
    
})();
