'use strict';

angular.module('transmissionUi')
  .directive('toggleItem', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          var elem = element.parent();
          var elems = elem.parent().parent().children().children();

          if (elem.hasClass('active') === true) {
            elem.removeClass('active');
          } else {
            elems.removeClass('active');
            elem.addClass('active');
        }
        });
      }
    };
  });
