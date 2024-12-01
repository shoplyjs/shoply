const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.on('request', (req, res) => {
  console.log(`${req.method} ${req.url}`);
});

server.listen(5555);

