'use strict';

angular.module('transmissionUi')
  .directive('progressBar', function ($document, $http, $interval) {
    return {
      templateUrl: 'directives/progress-bar/progress-bar.html',
      link: function (scope, element, attrs) {
        var id;
        var torrent;
        var timeoutId;


        function updateProgress() {
          $http.get('/api/torrent/get/' + id)
            .success(function(data) {
              torrent = data.torrents[0];
              // angular.element(document.querySelector('#p' + id)).addEventListener('mdl-componentupgraded', function() {
              //   this.MaterialProgress.setProgress(torrent.percentDone * 100);
              //   console.log("ID: " + id + " percentDone: " + (torrent.percentDone * 100));
              // });
              var mdl = element.find('#p' + id);
              console.log(mdl);
              mdl.bind('mdl-componentupgraded', function() {
                this.MaterialProgress.setProgress(torrent.percentDone * 100);
                console.log("bound");
              });

            });

        }

        scope.$watch(attrs.torrentId, function(value) {
          id = value;
          //updateProgress();
        });

        // element.on('$destroy', function() {
        //   $interval.cancel(timeoutId);
        // });
        //
        // timeoutId = $interval(function() {
        //   updateProgress();
        // }, 40000);
        // componentHandler.upgradeDom();
      }
    };
  });
