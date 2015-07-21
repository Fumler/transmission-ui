'use strict';

var _ = require('lodash');
var Rpc = require('./rpc.model');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * Get list of Rpc
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  Rpc.find(function (err, rpcs) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(rpcs);
  });
};

/**
 * Get a single Rpc
 *
 * @param req
 * @param res
 */
exports.show = function (req, res) {
  Rpc.findById(req.params.id, function (err, rpc) {
    if (err) { return handleError(res, err); }
    if (!rpc) { return res.status(404).end(); }
    return res.status(200).json(rpc);
  });
};

/**
 * Creates a new Rpc in the DB.
 *
 * @param req
 * @param res
 */
exports.create = function (req, res) {
  Rpc.create(req.body, function (err, rpc) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(rpc);
  });
};

/**
 * Updates an existing Rpc in the DB.
 *
 * @param req
 * @param res
 */
exports.update = function (req, res) {
  if (req.body._id) { delete req.body._id; }
  Rpc.findById(req.params.id, function (err, rpc) {
    if (err) { return handleError(res, err); }
    if (!rpc) { return res.status(404).end(); }
    var updated = _.merge(rpc, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(rpc);
    });
  });
};

/**
 * Deletes a Rpc from the DB.
 *
 * @param req
 * @param res
 */
exports.destroy = function (req, res) {
  Rpc.findById(req.params.id, function (err, rpc) {
    if (err) { return handleError(res, err); }
    if (!rpc) { return res.status(404).end(); }
    rpc.remove(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};
