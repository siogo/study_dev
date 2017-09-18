var http = require('http');
<<<<<<< HEAD
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
=======
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
>>>>>>> 90cc9d8bf7597c6e3ae9b0b1f75891bf1e8f7be7
        res.end();
    }).listen(5454);
}

exports.start = start;