var fork = require('child_process').fork;
var cpus = require('os').cpus();

var server = require('net').createServer();
server.listen(8452);

var workers = {}
var createWork = function(){
  var worker = fork(__dirname + '/work.js');
  worker.on('exit',function(){
    console.log(`Worker ${worker.pid} is exited`);
    delete workers[worker.pid];
    createWork();
  })
  worker.send('server',server);
  workers[worker.pid] = worker;
  console.log(`Worker ${worker.pid} is create`);
}

for(let i = 0; i<cpus.length;i++){
  createWork();
}

process.on('exit',function(){
  for(var pid in workers){
    workers[pid].kill();
  }
})
