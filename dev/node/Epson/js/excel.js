var xlsx = require('node-xlsx');
var fs = require('fs');

var obj = xlsx.parse('../input/F9380.xlsx');
var excelObj = obj[0].data;
var smallpoint;
var keyspecIndex;
for(var i = 0;i<excelObj.length;i++){
    console.log(excelObj[i]);
    if(excelObj[i][0] == '概述小点'){
        smallpoint = excelObj[i];
    }
    if(excelObj[i][0] == '规格keyspec'){
        keyspecIndex = i;
    }
}
console.log(keyspecIndex);

// console.log(smallpoint);