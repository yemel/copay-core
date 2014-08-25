'use strict';

/* Local storage implementation */

/*
  Events:
  - concurrent: Another implementation is accessing the same storage.
*/

var Storage = function (opts) {
  this.cypher = opts.cypher;
}

// List profiles
Storage.getProfiles = function() {

};

Storage.prototype.getProfile = function(wallet) {

};

Storage.prototype.saveProfile = function(wallet) {

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

// Global
Storage.prototype.getKey = function(key) {

};

Storage.prototype.setKey = function(key) {

};

Storage.prototype.clearKey = function(key) {

};

module.exports = Storage;
