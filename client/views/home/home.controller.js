'use strict';

angular.module('transmissionUi')
    .controller('HomeCtrl', function ($http) {

        var vm = this;

        if (localStorage.getItem('transmissionUi')) {
          $http.get('/api/rpcs/isConnected')
            .success(function(data) {

              if (data === false) {
                $http.post('/api/rpcs/connect', JSON.parse(localStorage.getItem('transmissionUi')))
                  .success(function(data) {
                    //vm.rpc = {};

                  })
                  .error(function(data) {
                    console.log('Error: ' + data);
                  });
              }
            });
        }

        var torrents = {};

        $http.get('/api/rpcs/all')
          .success(function(data) {
            vm.torrents = data;
          });


        angular.extend(vm, {
          torrents: torrents
        });
    });
