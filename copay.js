'use strict';

var copay = {};

copay.services = {
  Blockchain: require('./lib/services/blockchain'),
  Network: null,
  Storage: require('./lib/services/storage'),
  Cypher: require('./lib/services/cypher'),
  Market: require('./lib/services/market'),
}

module.exports = copay;

