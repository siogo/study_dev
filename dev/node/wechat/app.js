const express = require('express'), //express 框架 
	wechat = require('./wechat/wechat'),
	config = require('./config'); //引入配置文件

var app = express(); //实例express框架

var wechatApp = new wechat(config); //实例wechat 模块

//用于处理所有进入 8686 端口 get 的连接请求
app.get('/', function (req, res) {
	wechatApp.auth(req, res);
});

app.get('/getAccessToken',function(req,res){
	wechatApp.getAccessToken().then(function(data){
        res.send(data);
    });
})

app.listen(8686);

// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx67cf535d9aee3c13&secret=20dbeb3b8039816f4466215a1f2316c5