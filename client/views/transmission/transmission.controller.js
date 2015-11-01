'use strict';

angular.module('transmissionUi')
  .controller('TransmissionCtrl', function ($http, Storage, Alerts) {

    var vm = this;

    var transmissionSettings = {};

    transmissionSettings = JSON.parse(Storage.getStorage());

    var submit = function () {
      var result = Storage.setStorage(vm.transmissionSettings);
      Alerts.add('info', result);
    };

    angular.extend(vm, {
      name: 'TransmissionCtrl',
      transmissionSettings: transmissionSettings,
      submit: submit
    });



  });
