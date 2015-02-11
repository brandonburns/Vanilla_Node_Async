'use strict';

function base(response) {
  console.log('Request handler "base" was called.');

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('Hello');
  response.end();
}

function time(response) {
  console.log('Request handler "time" was called.');
  
  var todayDate = new Date();
  todayDate = todayDate.toString();

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(todayDate);
  response.end();
}

function greet(response, greetPerson) {
  console.log('Request handler "greet" was called.');

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello " + greetPerson);
  response.end();
}

exports.time = time;
exports.greet = greet;
exports.base = base;