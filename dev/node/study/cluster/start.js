var cluster = require('cluster');
var os = require('os');
var http = require('http');
var cpus = os.cpus();


if(cluster.isMaster){
  var reqTime = 0;
  setInterval(()=>{
    console.log(`reqTime = ${reqTime}`)
  },1000);


  function handleMsg(msg){
    if(msg.msg && msg.msg == 'showtime'){
      reqTime++;
    }
  }

  for(let i =0;i<cpus.length;i++){
    cluster.fork();
  }

  for(let j in cluster.workers){
    cluster.workers[j].on('message',handleMsg);
  }
}else{
    http.createServer(function(req, res){
    res.writeHead(200);
    res.end('this is my first cluster');

    process.send({msg:'showtime'});
  }).listen(8989);
}

// cluster.on('listening');