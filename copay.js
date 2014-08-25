'use strict';

var copay = {};

copay.services = {
  Blockchain: require('./lib/services/blockchain'),
  Network: null,
  Storage: require('./lib/services/storage'),
}

module.exports = copay;

