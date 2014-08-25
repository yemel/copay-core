'use strict';

var preconditions = require('preconditions').singleton();

/*
  Events:
    - address: activity on subscribed address.
    - block: a new block that includes a subscribed address.
    - connect: the connection with the blockchain is ready.
    - disconnect: the connection with the blochckain is unavailable.
*/

var Blockchain = function () {
  this.status = this.STATUS.DISCONNECTED;
}

Blockchain.prototype.STATUS = {
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected',
}

Blockchain.prototype.destroy = function() {

};

Blockchain.prototype.subscribe = function(addresses) {

};

Blockchain.prototype.unsubscribe = function(addresses) {

};

Blockchain.prototype.unsubscribeAll = function() {

};

Blockchain.prototype.broadcast = function(tx) {

};

// Should timout if not connected
Blockchain.prototype.getSubscriptions = function() {
// getListeners
}; 

Blockchain.prototype.getTransaction = function(tx) {
  // checkSentTx
};

Blockchain.prototype.getTransactions = function(addresses) {

}; // idem

Blockchain.prototype.getUnspent = function(addresses) {

};

Blockchain.prototype.getActivity = function(addresses) {
// checkActivity
};

module.exports = Blockchain;
