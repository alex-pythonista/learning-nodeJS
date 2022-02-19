
// implementation details
var url = 'http://localhost:3000/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log;
// module.exports.url = url;