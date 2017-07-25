//argv返回数组的成员依次是命令行的各个部分，真正的参数实际上是从process.argv[2]开始。
// console.log("argv: ",process.argv); 

//返回执行当前脚本的Node二进制文件的绝对路径。
// console.log(process.execPath) 


// console.log(process.env)

var env = process.env.NODE_ENV;
// console.log(env);

process.nextTick(function(){
    console.log('下一次Event Loop即将开始！');
});