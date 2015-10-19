'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./torrent.controller');

router.post('/connect', controller.connect);

router.get('/get', controller.getAll);
router.get('/get/:id', controller.get);
router.post('/add/file', controller.addFile);
router.post('/add/url', controller.addUrl);
router.get('/remove/:id', controller.remove);

router.get('/start', controller.startAll);
router.get('/start/:id', controller.start);
router.get('/stop', controller.stopAll);
router.get('/stop/:id', controller.stop);

//router.get('/:id', controller.show);

//router.post('/', controller.create);

//router.put('/:id', controller.update);

//router.delete('/:id', controller.destroy);

module.exports = router;
