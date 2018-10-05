
const Promise = require('bluebird')
const request = require('request-promise-native')
const config = require('./config')

class Client {

  constructor(options) {
    this.options = options || config.externalClient
  }


  
  

}

module.exports = Client