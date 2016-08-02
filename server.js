var http = require('http');
var url = require('url');

function start(route){
    var server = http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log('Request received for', pathname);

    route(pathname);

    res.writeHead(200, { 
        'Content-Type': 'text/html' 
    });
    res.write('<p><b>NodeJS</b> is awesome</p>');
    res.end();
});

server.listen(8000);
}

exports.start = start;
