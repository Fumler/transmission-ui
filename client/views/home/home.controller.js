'use strict';

angular.module('transmissionUi')
    .controller('HomeCtrl', function ($http, Storage, Alerts, Torrents) {

        var vm = this;
        console.log('test');

        var torrents = {};
        Torrents.getTorrents(function(error, result) {
          if (error) {
            Alerts.add('danger', 'Could not fetch torrents!');
          } else {
            vm.torrents = result.torrents;
          }
        });

        angular.extend(vm, {
          torrents: torrents,
        });
    });
