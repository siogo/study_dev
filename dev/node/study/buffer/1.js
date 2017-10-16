const buf = Buffer.from([0x01,0x02,0x03,0x04,0x05]);
const json = JSON.stringify(buf);

console.log(json);

const copy = JSON.parse(json,function(key,values){
    console.log(`key:${key},values:${values}`);
})