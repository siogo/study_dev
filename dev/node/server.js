var http = require('http');
// console.log(http);

function start(){
    http.createServer(function(req,res){
        console.log('request received');
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.write('hello node');
        res.end();
    }).listen(5454);
    console.log("server has started")
}

exports.start = start;