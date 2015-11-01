'use strict';

angular.module('transmissionUi')
  .factory('Storage', function () {

    this.getStorage = function() {
      return localStorage.getItem('transmissionUi') ? localStorage.getItem('transmissionUi') : '';
    };

    this.setStorage = function(data) {
      if (data) {
        localStorage.setItem('transmissionUi', JSON.stringify(data));
        return 'Saved!';
      } else {
        return 'Could not save! You didn\'t give me anything';
      }
    };

    return this;

  });
