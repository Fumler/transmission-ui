'use strict';

angular.module('transmissionUi')
  .directive('toggleItem', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          var elems = element.parent().parent().children().children();


          if (element.hasClass('active') === true) {
            element.removeClass('active');
          } else {
            elems.removeClass('active');
            element.addClass('active');
        }
        });
      }
    };
  });
