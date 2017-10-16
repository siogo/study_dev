var child_process = require('child_process');
var child = child_process.fork('./child1.js',{
  stdio:[0,1,2,'ipc']
})

child.on('message',function(message){
  console.log(`message from child :${JSON.stringify(message)}`);
  
})



child.send({from:'parent'});


child.unref();