'use strict';

angular.module('transmissionUi')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/transmission', {
        templateUrl: 'views/transmission/transmission.html',
        controller: 'TransmissionCtrl',
        controllerAs: 'vm'
      });
  });
