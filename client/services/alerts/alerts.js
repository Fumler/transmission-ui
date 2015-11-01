'use strict';

angular.module('transmissionUi')
  .factory('Alerts', function ($timeout) {

    var alerts = [];
    var self = this;

    self.add = function(type, msg) {
      var alert = {
        type: type,
        msg: msg,
        close: function() {
          return self.closeAlert(this);
        }
      };
      $timeout(self.closeAlert, 5000, true, alert);

      return alerts.push(alert);
    };

    self.closeAlert = function(alert) {
      return self.closeAlertIdx(alerts.indexOf(alert));
    };

    self.closeAlertIdx = function(index) {
      return alerts.splice(index, 1);
    };

    self.clear = function() {
      alerts = [];
    };

    self.get = function() {
      return alerts;
    };

    return self;


  });
