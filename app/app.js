(function () {
    "use strict";
    angular.module("app", [
        "ngRoute", 
        "chatApp.controllers",
        "chatApp.directives"
    ]);

    angular.module("app").config(function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: "/home" });

        $routeProvider.when('/home', {
            templateUrl: 'templates/phone/chat.html',
            controller: 'HomeController'
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
