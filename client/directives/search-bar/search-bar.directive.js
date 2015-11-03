'use strict';

angular.module('transmissionUi')
  .directive('searchBar', function ($location) {
    return {
      restrict: 'E',
      templateUrl: 'directives/search-bar/search-bar.html',
      link: function (scope, element) {
        var header = element.parent().parent();
        //var ham = header.find('i');
        var ham = angular.element(window.document.getElementsByClassName('mdl-layout__drawer-button')).find('i');
        var title = header.find('span');

        element.on('click', function() {
          element.find('input')[0].focus();
        });

        element.find('input').on('focus', function() {
          element.css('background', '#fff');
          header.css('background', '#f6f6f6');
          header.css('color', '#000');
          ham.css('color', '#000');
          ham.text('arrow_back');
          title.text('Back');
          element.find('.search-icon').html('<i class="material-icons">search</i>');
        });

        element.find('input').on('blur', function() {
          element.css('background', 'rgba(255, 255, 255, 0.15)');
          header.css('background', '#3f51b5');
          header.css('color', '#fff');
          ham.css('color', '#fff');
          ham.text('menu');
          title.text('Torrents');
        });

        scope.$location = $location;
        scope.$watch('$location.path()', function(locationPath) {
          if(locationPath === '/') {
            element.removeClass('ng-hide');
          } else {
            element.addClass('ng-hide');
          }
        });
      }
    };
  });
