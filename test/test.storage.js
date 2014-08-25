'use strict';

var chai = chai || require('chai');
var should = chai.should();

var copay = require('../copay');

describe('Storage', function() {

  var opts = {};
  opts.cypher = new copay.services.Cypher('passphrase');

  it('should be able to create an instance', function() {
    var instance = new copay.services.Storage(opts);
    should.exist(instance);
  });

  it('should fail witout a cypher', function() {

  });

  it('should emit event on concurrent modification', function() {

  });

  it('should list profiles', function() {

  });

  it('should save a new profiles', function() {

  });

  it('should get a wallet by id', function() {

  });

  it('should save a wallet', function() {

  });

  it('should delete a wallet', function() {

  });

  it('should get a global key', function() {

  });

  it('should set a global key', function() {

  });

  it('should clear a global key', function() {

  });

});