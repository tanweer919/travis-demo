var http = require('http');
http.createServer( (req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello Travis/n')
}).listen(1337, '127.0.0.1');
console.log('Server running at post 1337');