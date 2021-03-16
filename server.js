const http = require('http');

const server = http.createServer((req, res) => {
  res.end('HERE IS MY SERVER');
});

server.listen(process.env.PORT || 3000);
