var http = require('http')
var url = require('url')
var route = require('./route')

function start(handle){
	http.createServer(function(request,response){
		var pathname = url.parse(request.url).pathname;
		route.route(pathname,handle)
		console.log("Request for: "+pathname+" received");
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("hello world");
		response.end();
	}).listen(2345)
}

exports.start = start