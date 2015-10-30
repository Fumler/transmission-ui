'use strict';

angular.module('transmissionUi', [
    'ngRoute',
    'ngCookies'
  ])
  .config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  })

.run(function($rootScope, $location, $timeout) {

  $rootScope.$on('$viewContentLoaded', function() {
    $timeout(function() {
      componentHandler.upgradeAllRegistered();
      componentHandler.upgradeDom();
    });
  });

});
