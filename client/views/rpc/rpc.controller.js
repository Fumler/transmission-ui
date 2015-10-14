'use strict';

angular.module('transmissionUi')
  .controller('RpcCtrl', function ($http) {

    var vm = this;

    var rpc = {};

    if (localStorage.getItem('transmissionUi')) {
      rpc = JSON.parse(localStorage.getItem('transmissionUi'));
    }

    var submit = function () {
      console.log(vm.rpc);

      localStorage.setItem('transmissionUi', JSON.stringify(vm.rpc));

      $http.post('/api/rpcs/connect', vm.rpc)
        .success(function(data) {
          //vm.rpc = {};
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    angular.extend(vm, {
      name: 'RpcCtrl',
      rpc: rpc,
      submit: submit

    });



  });
