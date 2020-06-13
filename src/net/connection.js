const InStream = require('./stream/instream');

const handshakeDecoder = require('./decoders/handshake');

const connection = function(conn) {

    let username = '';
    let decoder = handshakeDecoder;

    console.log('Connection');

    conn.on('data', buf => {
        let array = new Int8Array(buf.buffer);
        let stream = new InStream();
        stream.setArray(array);

        console.log(stream);

        decoder(stream);

    });

    conn.on('error', err => {
        console.error('Error: ', err);
    });
    
    conn.on('end', () => {
        //remove from online players, all that good shit.
    });
};

module.exports = connection;