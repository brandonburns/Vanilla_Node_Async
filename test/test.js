'use strict';

require('../index.js');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('our http server', function() {
  var server = 'localhost:8080';
  it('should have homepage response', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('Hello');
        done();
      });
  });

  it('should greet by name', function(done) {
    chai.request(server)
      .get('/greet/name')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('Hello name');
        done();
      });
  });

  it('should respond to date and time request', function(done) {
    chai.request(server)
      .get('/time')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(Date.parse(res.text)).to.be.closeTo(Date.now(), 50000); 
        done();
      });
  });
});