'use strict';

angular.module('transmissionUi')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'directives/navbar/navbar.html'
    };
  });
