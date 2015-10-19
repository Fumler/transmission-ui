'use strict';

angular.module('transmissionUi')
  .controller('TransmissionCtrl', function ($http) {

    var vm = this;

    var transmissionSettings = {};

    if (localStorage.getItem('transmissionUi')) {
      transmissionSettings = JSON.parse(localStorage.getItem('transmissionUi'));
    }

    var submit = function () {
      localStorage.setItem('transmissionUi', JSON.stringify(vm.transmissionSettings));
    };

    angular.extend(vm, {
      name: 'TransmissionCtrl',
      transmissionSettings: transmissionSettings,
      submit: submit
    });



  });
