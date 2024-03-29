const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
/*
http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World\n');
  res.setHeader('Content-Type', 'text/plain');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
