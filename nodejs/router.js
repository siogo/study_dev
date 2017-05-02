function route(handle,pathname,response,request){
	console.log("关于路由请求 for :" + pathname);
	if(typeof handle[pathname] === "function"){
		return handle[pathname](response,request);
	}else{
		console.log("找不到请求处理程序 for " + pathname);
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("404 Not found");
		response.end()
	}
}

exports.route = route;
