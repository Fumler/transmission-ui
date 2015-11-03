'use strict';

angular.module('transmissionUi')
  .filter('bytes', function () {
    return function (bytes, precision, perSec) {
      if (bytes === 0) {
        if (perSec) {
          return '0 B/s';
        } else {
          return '0 B';
        }
      }
      if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) { return '-'; }
      if (typeof precision === 'undefined') { precision = 1; }

      var units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'],
          number = Math.floor(Math.log(bytes) / Math.log(1024)),
          val = (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision);

      if (perSec === false) {
        return (val.match(/\.0*$/) ? val.substr(0, val.indexOf('.')) : val) + ' ' + units[number];
      } else {
        return (val.match(/\.0*$/) ? val.substr(0, val.indexOf('.')) : val) + ' ' + units[number] + '/s';
      }
    };
  });
