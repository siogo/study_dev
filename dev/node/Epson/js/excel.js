var xlsx = require('node-xlsx');
var fs = require('fs');

var obj = xlsx.parse('../input/F9380.xlsx');
// console.log(obj[3].data);
var excelObj = obj[0].data;
var smallpoint;
var keyspecIndex;
var keystr = '';
for(var i = 0;i<excelObj.length;i++){
    if(excelObj[i][0] == '概述小点'){
        smallpoint = excelObj[i];
    }
    if(excelObj[i][0] == '规格keyspec'){
        keyspecIndex = i;
    }
}
console.log(keyspecIndex);

// console.log(smallpoint);