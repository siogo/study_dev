function route(pathname,handle){
	console.log("route is request for " + pathname);
	if(typeof(handle) === 'function'){
		handle[pathname]();
	}else{
		console.log("No request handler found for " + pathname);
	}
}

exports.route = route;