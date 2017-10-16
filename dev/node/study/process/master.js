var fork = require('child_process').fork;
var os = require('os');

// 这是主从模式

for(let i = 0;i<os.cpus().length;i++){
  fork('./work.js');
}