'use strict';

angular.module('transmissionUi')
  .directive('progressBar', function() {
    return {
      templateUrl: 'directives/progress-bar/progress-bar.html',
      link: function(scope, element, attrs) {

        attrs.$observe('progress', function(value) {
          element.ready(function() {
            scope.ele = element.children()[0];
            //console.log(element.children()[0]);
            scope.ele.MaterialProgress.setProgress(value);
            console.log('value set');
          });

        });
      }
    };
  });
