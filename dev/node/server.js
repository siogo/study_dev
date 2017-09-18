var http = require('http');
var events = require('events');
var zlib = require('zlib');
var fs = require('fs');
var url = require('url');
// console.log(events);

fs.createReadStream('input.txt').pipe(fs.createWriteStream('output.txt'));

fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.zip'))


var eventEmitter = new events.EventEmitter();

eventEmitter.on('test1',function(){
    console.log('this is test1-1');
})

eventEmitter.addListener('test1',function(){
    console.log('this is test1-2');
})

eventEmitter.emit('test1');
eventEmitter.emit('test2');

console.log(events.listenerCount(eventEmitter,'test1'))

function start(){
    http.createServer(function(req,res){
        // console.log('request received');
        var pathname = url.parse(req.url).pathname;
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.write('hello node');
        res.write('pathname:'+pathname);
        res.end();
    }).listen(5454);
    console.log("server has started")
}

exports.start = start;