'use strict';

var chai = chai || require('chai');
var should = chai.should();

var copay = require('../copay');

describe('Blockchain', function() {

  it('should be able to create an instance', function() {
    var instance = new copay.services.Blockchain();
    should.exist(instance);
  });

  it('should be able to destroy the instance', function() {

  });

  it('should subscribe to an address', function() {

  });

  it('should unsubscribe to an address', function() {

  });

  it('should unsubscribe to all addresses', function() {

  });

  it('should broadcast a raw transaction', function() {

  });

  describe('getTransaction', function() {
    it('should get a transaction by id', function() {

    });

    it('should handle a null response', function() {

    });

    it('should handle an empty response', function() {

    });
  });

  it('should get a set of transaction by addresses', function() {

  });

  it('should get a list of unspent output', function() {

  });

  describe('getActivity', function() {
    it('should get activity for an active address', function() {

    });

    it('should get activity for innactive addresses', function() {

    });
  });

  describe('Events', function() {
    it('should emmit event on a new block for subscried addresses', function() {

    });

    it('should emmit event on a transaction for subscried addresses', function() {

    });

    it('should emmit event on connection', function() {

    });

    it('should emmit event on disconnection', function() {

    });
  });

});