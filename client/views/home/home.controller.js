'use strict';

angular.module('transmissionUi')
    .controller('HomeCtrl', function () {

        var vm = this;


        document.querySelector('#p1').addEventListener('mdl-componentupgraded', function () {
            this.MaterialProgress.setProgress(42);
        });
        document.querySelector('#p2').addEventListener('mdl-componentupgraded', function () {
            this.MaterialProgress.setProgress(89);
        });
        document.querySelector('#p3').addEventListener('mdl-componentupgraded', function () {
            this.MaterialProgress.setProgress(56);
        });
        document.querySelector('#p4').addEventListener('mdl-componentupgraded', function () {
            this.MaterialProgress.setProgress(100);
        });
        document.querySelector('#p5').addEventListener('mdl-componentupgraded', function () {
            this.MaterialProgress.setProgress(76);
        });
        document.querySelector('#p6').addEventListener('mdl-componentupgraded', function () {
            this.MaterialProgress.setProgress(100);
        });
        document.querySelector('#p7').addEventListener('mdl-componentupgraded', function () {
            this.MaterialProgress.setProgress(65);
        });
        document.querySelector('#p8').addEventListener('mdl-componentupgraded', function () {
            this.MaterialProgress.setProgress(3);
        });
        angular.extend(vm, {
            name: 'HomeCtrl'
        });

    });