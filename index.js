const Client = require('./lib/client')

exports.createClient = function createClient(options) { 
  return new Client(options)
}