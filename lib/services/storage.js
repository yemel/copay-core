'use strict';

var preconditions = require('preconditions').singleton();

/*
  Local storage implementation

  Events:
  - concurrent: Another implementation is accessing the same storage.
*/

var Storage = function (opts) {
  preconditions.shouldBeObject(opts);

  this.cypher = opts.cypher;
}

// List profiles
Storage.getProfiles = function() {

};

Storage.prototype.getProfile = function(username) {

};

Storage.prototype.saveProfile = function(wallet) {

};

Storage.prototype.getSettings = function(profile) {

};

// List wallets for a profile
Storage.prototype.getWallets = function(profile) {

};

Storage.prototype.saveWallet = function(wallet) {

};

Storage.prototype.getWallet = function(wallet) {

};

Storage.prototype.deleteWallet = function(walletID) {

};

module.exports = Storage;
