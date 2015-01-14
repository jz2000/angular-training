(function () {
    "use strict";
    var module = angular.module("chatApp.directives", []);
    
    module.directive('userlist', [function() {
            var directive = {};
            directive.restrict = 'E'; 
            directive.templateUrl = 'templates/directives/userlist.html';
            directive.controller = 'UsersController';
            return directive;            
    }]);

    module.directive('messagelist', [function() {
            var directive = {};
            directive.restrict = 'E'; 
            directive.templateUrl = 'templates/directives/messagelist.html';
            directive.controller = 'MessagesController';
            return directive;            
    }]);

})();
