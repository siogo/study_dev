
process.on('message',function(message){
  console.log(`message from parent: ${JSON.stringify(message)}`)
  
console.log(process.channel);
})
process.send({from:'child'});
