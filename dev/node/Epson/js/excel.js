var xlsx = require('node-xlsx');
var fs = require('fs');
var path = require('path')

var obj = xlsx.parse('../input/F9380.xlsx');
// console.log(obj[3].data);
var excelObj = obj[0].data;
var str = '';
var smallpoint;
var keyspecIndex;
var keyspecs = [];
for(let i = 0;i<excelObj.length;i++){
    if(excelObj[i][0] == '概述小点'){
        smallpoint = excelObj[i];
    }
    if(excelObj[i][0] == '规格keyspec'){
        keyspecIndex = i;
    }
}
outermost:
for(let j = keyspecIndex+1; j<30;j++){ 
    if(excelObj[j][0] == undefined){
        if(excelObj[j][2] == undefined){

        }else{
            str = str + excelObj[j][1]+':'+excelObj[j][2]+`\n`;
            // keyspecs.push(excelObj[j][1]+':'+excelObj[j][2]);
        }
    }else{
        break outermost;
    }
    
}
fs.writeFile(path.join(__dirname,'../input/input.txt'),smallpoint[1].trim(),function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`input写入成功`);
    }
})

fs.writeFile(path.join(__dirname,'../input/keyspec.txt'),str.trim(),function(err){
    if(err){
        console.log(err);
    }else{
        console.log(`keyspce写入成功`)
    }
})

