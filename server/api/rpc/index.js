'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./rpc.controller');

router.post('/connect', controller.connect);
router.get('/all', controller.getAll);
router.get('/isConnected', controller.isConnected);

//router.get('/:id', controller.show);

//router.post('/', controller.create);

//router.put('/:id', controller.update);

//router.delete('/:id', controller.destroy);

module.exports = router;
