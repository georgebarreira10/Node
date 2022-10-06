
const http = require('http');

const hostname = 'localhost';
const port = 3000;

//construcao do SERVER

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  //Content-type é padrao. charset=utf-8 vem precedido de ; (para caracteres especiais)
  res.setHeader('Content-type', 'text/plain; charset=utf-8')
  res.end('Hello, George!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});