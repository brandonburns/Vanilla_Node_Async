'use strict';

var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);

    var name;
    var greetPerson;

    if(pathname.lastIndexOf('/') > 0) {
      name = pathname.lastIndexOf('/') + 1;
      greetPerson = pathname.substring(name, pathname.length);
      pathname = pathname.substring(0, pathname.lastIndexOf('/'));
    }
    
    console.log('Request for ' + pathname + ' received.');

    route(handle, pathname, response, greetPerson);
  }

  http.createServer(onRequest).listen(8080);
  console.log('Server has started');
}

exports.start = start;