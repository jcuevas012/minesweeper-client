
const Promise = require('bluebird')
const request = require('request-promise-native')
const config = require('./config')

class Client {

  constructor(options) {
    this.options = options || config
  }

  
  async start(params, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoint}/start`,
      qs: params,
      json: true
    }
    return Promise.resolve(request(options)).asCallback(callback)
  }
  
  

  async open(params, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoint}/open`,
      body: params,
      json: true
    }
    return Promise.resolve(request(options)).asCallback(callback)
  }


  async pause(id, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoint}/pause/${id}`,
      json: true
    }
    return Promise.resolve(request(options)).asCallback(callback)
  }

  async flag(id, params, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoint}/pause/${id}`,
      body: params,
      json: true
    }
    return Promise.resolve(request(options)).asCallback(callback)
  }


  async getUserGames(userId, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoint}/games/${userId}`,
      json: true
    }
    return Promise.resolve(request(options)).asCallback(callback)
  }
}

module.exports = Client