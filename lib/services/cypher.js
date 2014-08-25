'use strict';

var CryptoJS = require('node-cryptojs-aes').CryptoJS;
var preconditions = require('preconditions').singleton();

// Secured by closure
var passphrase;

var Cypher = function (pass) {
  preconditions.shouldBeString(pass);

  passphrase = pass;
}

Cypher.testPassphrase = function(pass, obj) {
  var cypher = new Cypher(pass);
  try {
    cypher.decrypt(obj);
    return true;
  } catch (e) {
    return false;
  }
}

Cypher.prototype.encrypt = function(obj) {
  var string = typeof(obj) == 'object' ? JSON.stringify(obj) : obj;
  var encrypted = CryptoJS.AES.encrypt(string, passphrase);
  var encryptedBase64 = encrypted.toString();
  return encryptedBase64;
}

Cypher.prototype.decrypt = function(base64) {
  preconditions.shouldBeString(base64);

  var decrypted = CryptoJS.AES.decrypt(base64, passphrase);
  if (!decrypted) throw new Error('Invalid passphrase');

  decrypted = decrypted.toString(CryptoJS.enc.Utf8);

  // Try to parse an object if possible
  try {
    return JSON.parse(decrypted);
  } catch (e) {
    return decrypted;
  }
}

module.exports = Cypher;