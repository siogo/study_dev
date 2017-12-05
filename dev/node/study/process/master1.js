var fork = require('child_process').fork;
var cpus = require('os').cpus();

var server = require('net').createServer();
server.listen(8452);

var workers = {}
var createWork = function(){
  var worker = fork(__dirname + '/work.js');

  // 2.0 ,工作进程在退出的时候向主进程发送了一个消息，当主进程接收到了这个消息后再创建新进程
  worker.on('exit',function(){
    console.log(`Worker ${worker.pid} is exited`);
    delete workers[worker.pid];
  })

  worker.on('message',function(m){
    if(m.act === 'suicide'){
      createWork();
    }
  })


  // 1.0
  // worker.on('exit',function(){
  //   console.log(`Worker ${worker.pid} is exited`);
  //   delete workers[worker.pid];
  //   createWork();
  // })

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
