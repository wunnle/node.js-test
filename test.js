var http = require('http');

http.createServer(function(request, response) {
  response.write('Hello universe!')
  response.end()
}).listen(8080)