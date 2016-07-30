var http = require('http');

var server = http.createServer(function(req, res){
   console.log(req.method, req.url);
});

server.listen(8000);
