var http = require('http');
var fork = require('child_process').fork;

// var server = http.createServer(function(sokect){

// })

var child1 = fork('child.js');
var child2 = fork('child.js');

var server = require('net').createServer();
server.on('connection',function(socket){
  socket.end('handle by parent\n')
})

server.listen(1337,function(){
  child1.send('server',server);
  child2.send('server',server)
})