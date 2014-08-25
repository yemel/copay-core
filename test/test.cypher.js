'use strict';

var chai = chai || require('chai');
var should = chai.should();

var copay = require('../copay');

describe('Cypher', function() {

  it('should be able to create an instance', function() {
    var instance = new copay.services.Blockchain();
    should.exist(instance);
  });

  it('should test a passphrase', function() {

  });

  it('should fail with empty passphrase', function() {

  });

  it('should encrypt an string', function() {

  });

  it('should encrypt an object', function() {

  });

  it('should fail with a bad passphrase', function() {

  });

  it('should fail decrypting an empty string', function() {

  });

});