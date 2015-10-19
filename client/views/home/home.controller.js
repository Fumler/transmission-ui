'use strict';

angular.module('transmissionUi')
    .controller('HomeCtrl', function ($http) {

        var vm = this;

        if (localStorage.getItem('transmissionUi')) {
          $http.post('/api/torrent/connect', JSON.parse(localStorage.getItem('transmissionUi')))
            .success(function(data) {
              console.log("[HOME] Connecting to transmission!");
              console.log("DATA: " + data);

              if (isNaN(data)) {
                console.log('Did not connect');
              } else {
                console.log('Connected');
              }

            });
        } else {
          alert('Add transmission settings plx');
        }



        var torrents = {};

        $http.get('/api/torrent/get')
          .success(function(data) {
            vm.torrents = data;
          });


        angular.extend(vm, {
          torrents: torrents,

        });
    });
