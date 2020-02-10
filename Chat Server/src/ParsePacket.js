exports.type = [
    'MESSAGE',
    'ENTER',
    'LEAVE',
    'SYSTEM',
    'UPDATE'
];

exports.MESSAGE = 0;
exports.ENTER = 1;
exports.LEAVE = 2;
exports.SYSTEM = 3;
exports.UPDATE = 4;

exports.Parse = (packet) => {
    try {
        return JSON.parse(packet);
    } catch (e) {
        return false;
    }
}

exports.BuildPacket = (type, data) => {
    return; 
}