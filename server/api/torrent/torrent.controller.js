'use strict';

var Transmission = require('transmission');

function handleError (res, err) {
  return res.status(200).send(err);
}

var transmission;

exports.connect = function (req, res) {
  if (req.body.host && req.body.port) {
    transmission = new Transmission({
      port: req.body.port,
      host: req.body.host,
      url: req.body.url,
      username: req.body.username,
      password: req.body.password
    });
  } else {
    handleError(res, 'could not connect, missing host and port');
  }

  transmission.sessionStats(function(err, result) {
    if (err) {
      return res.json('nope');
    } else {
      return res.json(result.activeTorrentCount);
    }
  });
};

exports.getAll = function(req, res) {
  transmission.get(function(err, result) {
    if (err) {
      handleError(res, err);
    } else {
      return res.json(result.torrents);
    }
  });
};

exports.get = function(req, res) {
  var id = req.params.id;
  transmission.get(id, function(err, result) {
    if (err) {
      handleError(res, err);
    } else {
      return res.json(result);
    }
  });
};

exports.addFile = function(req, res) {

};

exports.addUrl = function(req, res) {

};

exports.remove = function(req, res) {
  var id = req.params.id;
  transmission.remove(id, false, function(err, result) {
    if (err) {
      handleError(res, err);
    } else {
      return res.json(result);
    }
  });
};

exports.startAll = function(req, res) {
  transmission.startAll(function(err, result) {
    if (err) {
      handleError(res, err);
    } else {
      return res.json(result);
    }
  });
};

exports.start = function(req, res) {
  var id = req.params.id;
  transmission.start(id, function(err, result) {
    if (err) {
      handleError(res, err);
    } else {
      return res.json(result);
    }
  });
};

exports.stopAll = function(req, res) {
  transmission.stopAll(function(err, result) {
    if (err) {
      handleError(res, err);
    } else {
      return res.json(result);
    }
  });
};

exports.stop = function(req, res) {
  var id = req.params.id;
  transmission.stop(id, function(err, result) {
    if (err) {
      handleError(res, err);
    } else {
      return res.json(result);
    }
  });
};







// /**
//  * Get a single Rpc
//  *
//  * @param req
//  * @param res
//  */
// exports.get = function (req, res) {
//   Rpc.findById(req.params.id, function (err, rpc) {
//     if (err) { return handleError(res, err); }
//     if (!rpc) { return res.status(404).end(); }
//     return res.status(200).json(rpc);
//   });
// };
//
// /**
//  * Creates a new Rpc in the DB.
//  *
//  * @param req
//  * @param res
//  */
// exports.create = function (req, res) {
//   Rpc.create(req.body, function (err, rpc) {
//     if (err) { return handleError(res, err); }
//     return res.status(201).json(rpc);
//   });
// };
//
// /**
//  * Updates an existing Rpc in the DB.
//  *
//  * @param req
//  * @param res
//  */
// exports.update = function (req, res) {
//   if (req.body._id) { delete req.body._id; }
//   Rpc.findById(req.params.id, function (err, rpc) {
//     if (err) { return handleError(res, err); }
//     if (!rpc) { return res.status(404).end(); }
//     var updated = _.merge(rpc, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.status(200).json(rpc);
//     });
//   });
// };
//
// /**
//  * Deletes a Rpc from the DB.
//  *
//  * @param req
//  * @param res
//  */
// exports.destroy = function (req, res) {
//   Rpc.findById(req.params.id, function (err, rpc) {
//     if (err) { return handleError(res, err); }
//     if (!rpc) { return res.status(404).end(); }
//     rpc.remove(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.status(204).end();
//     });
//   });
// };
