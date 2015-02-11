'use strict';

var server = require('./server');
var router = require('./router');
var reqHandle = require('./reqHandle');

var handle = {};
handle['/'] = reqHandle.base;
handle['/greet'] = reqHandle.greet;
handle['/time'] = reqHandle.time;


server.start(router.route, handle);