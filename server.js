//CREATING A BACKEND SERVER WITH NODE JS
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('HERE IS MY SERVER');
// });

// server.listen(process.env.PORT || 3000);


const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
