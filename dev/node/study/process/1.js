console.log(1);
// console.log(process.abort());
console.log(`process.arch为：${process.arch}`);

// 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数，第一个元素为process.execPath
console.log(`process.argv为：${process.argv}`);
console.log(`process.execPath为：${process.execPath}`);

// process.chdir()

// 返回 Node.js 进程当前工作的目录。
console.log(`process.cwd()为：${process.cwd()}`)

process.exitCode = 1;
console.log(`process.exitCode为${process.exitCode}`)

// console.log(process.getegid());

// console.log(process.getgroups());

console.log(process.mainModule)

console.log(process.platform)

console.log(process.release);

console.log(2);

console.log(3);

process.on('exit',(code)=>{
  console.log(`此时结束进程的code为：${code}`)
})