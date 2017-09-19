var ak = '34277fe29aa24a4f8038c1b4baa20983';
var sk = '17aa88e92da848f78ad5d03a052c09fb';
var ocr = require('baidu-ocr-api').create(ak,sk);
var fs = require('fs');
ocr.scan({
    url:'../test01.jpg',
    type:'text',
  },function (err,result) {
    if(err){
      return console.log(err)
    }
    console.log(result);
    fs.writeFile('../ocr.txt',result,function(err){
        console.log(err);
    })
  })