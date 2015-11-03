'use strict';

angular.module('transmissionUi')
  .factory('Torrents', function($http, $timeout, Storage) {
    var self = this;

    self.connect = function(opts, cb) {
      self.settings = JSON.parse(Storage.getStorage());
      self.url = 'http://' + self.settings.host + ':' + self.settings.port + self.settings.url;

      $http.post(self.url, JSON.stringify(opts), {
          headers: {
            'Authorization': 'Basic ' + btoa(self.settings.username + ':' + self.settings.password),
            'X-Transmission-Session-Id': self.sessionToken || ''
          }
        })
        .then(function(res) {
          if (res.status === 200) {
            if (res.data.result === 'success') {
              cb(null, res.data.arguments);

            } else {
              var error = new Error(res.data.result);
              error.result = res.data;
              cb(error);
            }
          }
        },
        function(res) {
          if (res.status === 409) {
            self.sessionToken = res.headers()['x-transmission-session-id'];
            self.connect(opts, cb);
          } else {
            var error = new Error('Status code mismatch');
            error.result = res.data;
            cb(error, null);
          }
        });
    };

    self.getTorrents = function(cb) {
      var params = {
        arguments : {
          fields : self.methods.torrents.fields
        },
        method : self.methods.torrents.get
      };

      self.connect(params, cb);
    };



    self.methods = {
      torrents: {
        stop: 'torrent-stop',
        start: 'torrent-start',
        startNow: 'torrent-start-now',
        verify: 'torrent-verify',
        reannounce: 'torrent-reannounce',
        set: 'torrent-set',
        setTypes: {
          'bandwidthPriority': true,
          'downloadLimit': true,
          'downloadLimited': true,
          'files-wanted': true,
          'files-unwanted': true,
          'honorsSessionLimits': true,
          'ids': true,
          'location': true,
          'peer-limit': true,
          'priority-high': true,
          'priority-low': true,
          'priority-normal': true,
          'seedRatioLimit': true,
          'seedRatioMode': true,
          'uploadLimit': true,
          'uploadLimited': true
        },
        add: 'torrent-add',
        addTypes: {
          'download-dir': true,
          'filename': true,
          'metainfo': true,
          'paused': true,
          'peer-limit': true,
          'files-wanted': true,
          'files-unwanted': true,
          'priority-high': true,
          'priority-low': true,
          'priority-normal': true
        },
        remove: 'torrent-remove',
        removeTypes: {
          'ids': true,
          'delete-local-data': true
        },
        location: 'torrent-set-location',
        locationTypes: {
          'location': true,
          'ids': true,
          'move': true
        },
        get: 'torrent-get',
        fields: ['leechers', 'seeders', 'activityDate', 'addedDate', 'bandwidthPriority', 'comment', 'corruptEver', 'creator', 'dateCreated', 'desiredAvailable', 'doneDate', 'downloadDir', 'downloadedEver', 'downloadLimit', 'downloadLimited', 'error', 'errorString', 'eta', 'files', 'fileStats', 'hashString', 'haveUnchecked', 'haveValid', 'honorsSessionLimits', 'id', 'isFinished', 'isPrivate', 'leftUntilDone', 'magnetLink', 'manualAnnounceTime', 'maxConnectedPeers', 'metadataPercentComplete', 'name', 'peer-limit', 'peers', 'peersConnected', 'peersFrom', 'peersGettingFromUs', 'peersKnown', 'peersSendingToUs', 'percentDone', 'pieces', 'pieceCount', 'pieceSize', 'priorities', 'rateDownload', 'rateUpload', 'recheckProgress', 'seedIdleLimit', 'seedIdleMode', 'seedRatioLimit', 'seedRatioMode', 'sizeWhenDone', 'startDate', 'status', 'trackers', 'trackerStats ', 'totalSize', 'torrentFile', 'uploadedEver', 'uploadLimit', 'uploadLimited', 'uploadRatio', 'wanted']
      },
      session: {
        stats: 'session-stats',
        get: 'session-get',
        set: 'session-set',
        setTypes: {
          'start-added-torrents': true,
          'alt-speed-down': true,
          'alt-speed-enabled': true,
          'alt-speed-time-begin': true,
          'alt-speed-time-enabled': true,
          'alt-speed-time-end': true,
          'alt-speed-time-day': true,
          'alt-speed-up': true,
          'blocklist-enabled': true,
          'dht-enabled': true,
          'encryption': true,
          'download-dir': true,
          'peer-limit-global': true,
          'peer-limit-per-torrent': true,
          'pex-enabled': true,
          'peer-port': true,
          'peer-port-random-on-start': true,
          'port-forwarding-enabled': true,
          'seedRatioLimit': true,
          'seedRatioLimited': true,
          'speed-limit-down': true,
          'speed-limit-down-enabled': true,
          'speed-limit-up': true,
          'speed-limit-up-enabled': true
        }
      },
      other: {
        blockList: 'blocklist-update',
        port: 'port-test'
      }
    };


    return self;
  });
