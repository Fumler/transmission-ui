'use strict';

angular.module('transmissionUi', [
    'ngRoute',
    'ngCookies',
    'ngAnimate'
  ])
  .config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: false,
    });

  })

.run(function($rootScope, $location, $timeout) {

  $rootScope.$on('$viewContentLoaded', function() {
    $timeout(function() {
      componentHandler.upgradeAllRegistered();
      componentHandler.upgradeDom();
    });
  });

})
.controller('BodyCtrl', function($scope, $timeout, Alerts) {
  $scope.alerts = Alerts.get();
});
