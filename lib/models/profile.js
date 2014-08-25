'use strict';

var preconditions = require('preconditions').singleton();

var Profile = function (opts) {
  
  this.name = opts.name;
  this.avatar = opts.avatar;
  this.unit = opts.unit;
  this.fiat = opts.fiat;
}

Profile.prototype.getWallets = function() {

}

module.exports = Profile;

