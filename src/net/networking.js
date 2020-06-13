const properties = require('../utils/properties');
const net = require('net');
const connection = require('./connection');

const server = net.createServer(connection);

const begin = function() {
    server.listen(properties['port'], '127.0.0.1');
    console.log('Started server on port: '+properties['port']);
}

module.exports = {
    begin
}

