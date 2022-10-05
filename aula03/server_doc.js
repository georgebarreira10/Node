
const http = require('http');

const hostname = 'localhostne';
const port = 3000;

//construcao do SERVER

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  //Content-Type é padrao
  res.setHeader('content-type', 'text/plain', 'charset=utf-8')
  res.end('Hello, George!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});