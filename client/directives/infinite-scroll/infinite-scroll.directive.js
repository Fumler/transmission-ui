'use strict';

angular.module('transmissionUi')
  .directive('infiniteScroll', function($document, $window) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var raw = element[0];

        $document.bind('scroll', function() {
          if (($window.innerHeight + $window.scrollY) > getDocHeight() - 200) {
            scope.$apply(attrs.infiniteScroll);
          }
        });

        function getDocHeight() {
          return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );
        }
      }
    };
  });
