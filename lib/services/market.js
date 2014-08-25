'use strict';

var preconditions = require('preconditions').singleton();

var AUTO_REFRESH = 1 * 60 * 1000; // 1 minute

var Market = function () {
  this.rates = [];
  this.refresh();
}

Market.prototype.refresh = function() {
  // Fetch: https://bitpay.com/api/rates
  this.rates = [
    {"code":"USD","name":"US Dollar","rate":502.62},
    {"code":"EUR","name":"Eurozone Euro","rate":378.8565}
  ];
}

Market.prototype.convertFromSat = function(value, currency) {
  return 0;
}

Market.prototype.convertToSat = function(value, currency) {
  return 0;
}

module.exports = Market;