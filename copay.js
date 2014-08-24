'use strict';

var copay = {};

copay.services = {
  Blockchain: require('./lib/services/blockchain'),
  Network: null,
  Storage: null,
}

module.exports = copay;

