'use strict';

angular.module('transmissionUi', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'cfp.hotkeys'
  ])
  .config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: false,
    });

  })

.run(function($rootScope, $location, $timeout) {
  var mdlUpgradeDom = false;
  setInterval(function() {
    if (mdlUpgradeDom) {
      componentHandler.upgradeDom();
      mdlUpgradeDom = false;
    }
  }, 200);

  var observer = new MutationObserver(function() {
    mdlUpgradeDom = true;
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });


  // $rootScope.$on('$viewContentLoaded', function() {
  //   $timeout(function() {
  //     componentHandler.upgradeAllRegistered();
  //     componentHandler.upgradeDom();
  //   });
  // });

})
.controller('BodyCtrl', function($scope, $timeout, Alerts) {
  $scope.alerts = Alerts.get();


});
