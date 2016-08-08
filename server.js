var http = require('http');
var url = require('url');

function start(route, handle){
    var server = http.createServer(function(req, res){
      var pathname = url.parse(req.url).pathname;

      res.writeHead(200, {
          'Content-Type': 'text/plain'
      });
      route(handle, pathname, res);
    });

    server.listen(8000);
}

exports.start = start;
