'use strict';

var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RpcSchema = new Schema({
  name: String,
  ip: String,
  port: Number,
  username: String,
  passwordHash: String,
  salt: String,
  userId: String
});

RpcSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.passwordHash = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

  RpcSchema.methods = {


    /**
     * Make salt
     *
     * @return {String}
     */
    makeSalt: function () {
      return crypto.randomBytes(16).toString('base64');
    },
    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     */
    encryptPassword: function (password) {
      if (!password || !this.salt) { return ''; }
      var salt = new Buffer(this.salt, 'base64');
      return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
    }
  };

module.exports = mongoose.model('Rpc', RpcSchema);
