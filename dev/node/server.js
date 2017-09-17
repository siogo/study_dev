var http = require('http');
var url = require('url');
// console.log(http);

function start(){
    http.createServer(function(req,res){
        res.writeHead(200,{"Content-Type":"text/plain"});
        var pathname = url.parse(req.url).pathname;
        // console.log(pathname);
        if(pathname == '/love' ){
            res.write('hello love return');
        }else if(pathname == '/shit'){
            res.write('hello shit')
        }else{
            res.write('hello node');
        }
        // var params = url.parse(req.url ,true).query;
        res.end();
    }).listen(5454);
}

exports.start = start;