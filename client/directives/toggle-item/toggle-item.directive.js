'use strict';

angular.module('transmissionUi')
  .directive('toggleItem', function () {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: {
        active: '='
      },
      template: '<div ng-click="active = $id;" ng-class="{active: $id === active}" ng-transclude></div>'
    };
  });
