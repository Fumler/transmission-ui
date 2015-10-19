'use strict';

var _ = require('lodash');
var Transmission = require('transmission');

function handleError (res, err) {
  return res.status(500).send(err);
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
    })
  } else {
    handleError(res, 'could not connect, missing host and port');
  }
  console.log(res);
  return res.status(200).json('Connected to transmission!');
};

exports.getAll = function(req, res) {
  transmission.get(function(err, result) {
    if (err) {
      handleError(res, err);
      throw err;
    }

    return res.status(200).json(result.torrents);
  })
}

exports.isConnected = function(req, res) {
  if (transmission) {
    return res.status(200).json(true);
  } else {
    return res.status(200).json(false);
  }
}





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
