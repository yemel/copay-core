'use strict';

function Wallet(config) {
  // id
  // totalCopayers
  // requredCopayers

  // Metadata
  //  name
  //  copayersMetadata = {name, avatar, id}
  //  anonymous
  //  starred
  //  archived

  // - Private Key -

  // - Backing Services -
  // network [MessageBroker]
  // blockchain [Insight]
  // storage [LocalStorage]
}

// ----- General ------

Wallet.prototype.getJoinSecret = function() {

};

Wallet.prototype.canJoin = function() {

};

Wallet.prototype.getCopayers = function() {

};

Wallet.prototype.isTestnet = function() {

};


// ----- Addresses ------

Wallet.prototype.getBalance = function(unconfirmed, locked) {

};

// filters: used: false, balance: false, change, tags
Wallet.prototype.getAddresses = function(filters) {

};

Wallet.prototype.createAddress = function(label, tags) {

};

Wallet.prototype.saveAddress = function() {

};

// ----- Transaction Proposals ------

// filter: pending
Wallet.prototype.getTransaction = function(filters) {

};

Wallet.prototype.createTransaction = function(to, amout, alias, reference) {

};

Wallet.prototype.signTransaction = function(transaction) {

};

Wallet.prototype.rejectTransaction = function(transaction) {

};

Wallet.prototype.broadcast = function(transaction) {

};

// ----- Invoices ------

// filters: status: 'pending'
Wallet.prototype.getInvoices = function(filters) {

};

Wallet.prototype.createInvoice = function() {

};

// filters: outgoing: true, results: 10, page: 1
Wallet.prototype.getHistory = function(filters) {

};

module.exports = Wallet;