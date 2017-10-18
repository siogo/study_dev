const express = require('express'),
      crypto = require('crypto'),
      config = require('./config')

var app = express();

app.get('/',function(req,res){
  res.send('Hello Wechat\n');

  var signature = req.query.signature,  //微信加密签名
      timestamp = req.query.timestamp,  //时间戳
          nonce = req.query.nonce,      //随机数
        echostr = req.query.echostr;    //随机字符串


  var array = [signature,timestamp,nonce];
  array.sort();

  var temparr = array.join('');
  const hashCode = crypto.createHash('sha1');
  var resultCode = hashCode.update(temparr,'utf-8').digest('hex');

  if(resultCode == signature){
    res.send(echostr);
  }else{
    res.send('mismatch');
  }
}).listen(8686);