//returns size. Used for 1/2 packets sent, will fix that in future.
//credits to Makar for telling me about this
const decode = function(stream) {

    let opcode = stream.readUnsignedByte();

    if(opcode == 15) {
        //handshake
        let size = stream.readUnsignedByte();
        if(stream.getRemaining() < size) {
            return 0;
        }
    }

}

module.exports = decode;