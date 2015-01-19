(function () {
    'use strict';

    var module = angular.module('chatApp.MessageSender', ['chatApp.DataModel']);
        
    module.controller('MessageSenderController', function($scope, DataModelService) {
            $scope.isLoggedIn = function() {
                return DataModelService.isLoggedIn();
            };
            $scope.messageText = '';
            $scope.postMessage = function() {
                DataModelService.postMessage($scope.messageText);
                $scope.messageText = '';
            };
        }
    );
    
    module.directive('messagesender', [function() {
            var directive = {};
            directive.restrict = 'E'; 
            directive.templateUrl = 'components/message-sender/message-sender-template.html';
            directive.controller = 'MessageSenderController';
            directive.controllerAs = 'messagesenderCtrl';
            return directive;            
    }]);
    
})();
