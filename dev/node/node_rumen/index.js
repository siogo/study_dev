var server = require("./server")
var requestHandlers = require("./requestHandler")

var handle = {}
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
server.start(handle)