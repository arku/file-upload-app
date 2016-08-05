var http = require('http');
var url = require('url');

function start(route, handle){
    var server = http.createServer(function(req, res){
      var pathname = url.parse(req.url).pathname;

      route(handle, pathname);
      res.writeHead(200, {
          'Content-Type': 'text/html'
      });
      res.write('<p><b>NodeJS</b> is awesome</p>');
      res.end();
    });

    server.listen(8000);
}

exports.start = start;
