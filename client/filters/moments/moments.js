'use strict';

angular.module('transmissionUi')
  .filter('moments', function () {
    return function (date) {
      return moment(date).fromNow();
    };
  });
