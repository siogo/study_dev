function requestHandlers(){
	function start(){
		console.log("Request handler 'start' was called.");
	}
	function upload(){
		console.log("Request handler 'upload' was called.");
	}
}

exports.requestHandlers = requestHandlers