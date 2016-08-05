var server = require('./server');
var router = require('./router');
var handlers = require('./requestHandlers');

var handlers = {
  '/': handlers.start,
  '/start': handlers.start,
  '/upload': handlers.upload
}
server.start(router.route, handlers);
