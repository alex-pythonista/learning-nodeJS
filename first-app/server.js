const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
        console.log('Request received');
    }
});

server.listen(3000);

console.log('Listening on port 3000...');