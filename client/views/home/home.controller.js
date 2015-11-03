'use strict';

angular.module('transmissionUi')
  .controller('HomeCtrl', function($scope, $http, $timeout, Storage, Alerts, Torrents, hotkeys) {
    var vm = this;
    vm.limit = 50;
    vm.scrollHandler = function() {
      vm.limit += 50;
      console.log('SCROLLED');
    };

    vm.update = function() {
      $timeout(function() {
        Torrents.getTorrents(function(error, result) {
          if (error) {
            Alerts.add('danger', 'Could not fetch torrents!');
          } else {
            vm.torrents = result.torrents;
            console.log('vm.torrents updated');
            vm.update();
          }
        });
      }, 2000);
    };

    vm.update();

    hotkeys.bindTo($scope)
      .add({
        combo: 'ctrl+f',
        description: 'Search',
        callback: function() {
          window.document.getElementsByClassName('search-box')[0].focus();
          console.log('ctrlf');
        }
      }).add({
        combo: 'escape',
        description: 'Close search',
        allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
        callback: function() {
          console.log('esc');
          window.document.getElementsByClassName('search-box')[0].blur();
        }
      });


    angular.extend(vm, {

    });
  });
