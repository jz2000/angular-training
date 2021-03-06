(function () {
    "use strict";
    angular.module("app", [
        "ngRoute", 
        "chatApp.DataModel",
        "chatApp.UserList",
        "chatApp.MessageList"
    ]);

    angular.module("app").config(function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: "/home" });

        $routeProvider.when('/home', {
            templateUrl: 'templates/home.html'
        });

        $routeProvider.when('/users', {
            templateUrl: 'templates/chat/users.html',
            controller: 'UsersController'
        });

        $routeProvider.when('/messages', {
            templateUrl: 'templates/chat/messages.html',
            controller: 'MessagesController'
        });
    });

})();
