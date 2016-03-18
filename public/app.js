(function() {
  'use strict';

  angular.module('TonaSite', ['home', 'ngRoute', 'user', 'common', 'ui.bootstrap']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'modules/home/home.html',
            controller: 'homeViewModel',
            controllerAs: 'home'
        })

        // Users page
        .when('/showUsers', {
            templateUrl: 'modules/user/user.html',
            controller: 'userViewModel',
            controllerAs: 'user'
        });

    $locationProvider.html5Mode(true);

  }]);
})();
