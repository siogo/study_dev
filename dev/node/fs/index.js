var fs = require('fs');

// 写入文件
// fs.writeFile('message.txt','Hello Node.js',function(err){
//     if(err){
//         throw err;
//     }
//     console.log('It\'s saved!');
// })

// 创建文件夹
// fs.mkdir('./helloDir',0777,function(err){
//     if(err){throw err;}
// });

// 写入文件
// fs.writeFile('./helloDir/message.txt','Hello world',function(err){
//     if(err){throw err;}
//     console.log('文件写入成功');
// })

// 读文件
// fs.readFile('./helloDir/message.txt',function(err,data){
//     if(err){
//         throw err;
//     }
//     console.log(data.toString());
// })

// fs.readdir(process.cwd(),function(err,data){
//     if(err){
//         console.log(err);
//         return ;
//     }
//     var count = data.length
//     console.log(data)
//     var results = {};
//     data.forEach(function(filename){
//         console.log(filename);
//         fs.readFile(filename,function(file){
//             results[filename] = data;
//             count--;
//             if(count<=0){
                
//             }
//         })
//     })  
// })


fs.readdir('./', function (err, files) {
  if (err) throw err;

  files.forEach( function (file) {
    fs.stat('./' + file, function (err, stats) {
      if (err) throw err;

      if (stats.isFile()) {
        console.log("%s is file", file);
      }
      else if (stats.isDirectory ()) {
      console.log("%s is a directory", file);
      }
    console.log('stats:  %s',JSON.stringify(stats));
    });
  });
})

