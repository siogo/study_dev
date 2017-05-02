var http = require("http");
var url = require("url");

function start(route,handle){
	http.createServer(function(req,res){
		var postData = "";
		var pathname = url.parse(req.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle,pathname,res,req);
	}).listen(9090);
}


exports.start = start;

// var http = require("http");

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(9090);
