'use strict';

var chai = chai || require('chai');
var should = chai.should();

var copay = require('../copay');

describe('Market', function() {

  it('should be able to create an instance', function() {
    var instance = new copay.services.Market();
    should.exist(instance);
  });

  it('should refresh rates on create', function() {

  });

  it('should auto-refresh rates', function() {

  });

  it('should convert satoshis to currency', function() {

  });

  it('should convert currency to satoshis', function() {

  });

  it('should fail with emtpy values', function() {

  });

  it('should fail with invalid currency', function() {

  });

});