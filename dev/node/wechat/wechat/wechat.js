const https = require('https');
const crypto = require('crypto'); //引入加密模块
const util = require('util');
const accessTokenJson = require('./access_token.json');
const fs = require('fs');
const URL = require('url')
const menus = require('./menus.json');

//构建 WeChat 对象 即 js中 函数就是对象
var WeChat = function(config){
    //设置 WeChat 对象属性 config
    this.config = config;

    //设置 WeChat 对象属性 token
	this.token = config.token;

	this.appID = config.appID;

	this.appSerect = config.appSerect;

	this.apiDomain = config.apiDomain;

	this.apiURL = config.apiURL;
	
	this.requestGet = function(url){
			return new Promise(function(resolve,reject){
				https.get(url,function(res){
					var buffer,result = "";
					//监听 data 事件
					res.on('data',function(data){
						buffer = data;
					});
					//监听 数据传输完成事件
					res.on('end',function(){
						result = buffer.toString('utf-8');
						//将最后结果返回
						resolve(result);
					});
				}).on('error',function(err){
					reject(err);
				});
			});
		
	};

	this.requestPost = function(url,data){
        return new Promise(function(resolve,reject){
            //解析 url 地址
            var urlData = URL.parse(url);
            //设置 https.request  options 传入的参数对象
            var options={
                //目标主机地址
                hostname: urlData.hostname, 
                //目标地址 
                path: urlData.path,
                //请求方法
                method: 'POST',
                //头部协议
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(data,'utf-8')
                }
            };
            var req = https.request(options,function(res){
                var buffer = [],result = '';
                //用于监听 data 事件 接收数据
                res.on('data',function(data){
                    buffer.push(data);
                });
                 //用于监听 end 事件 完成数据的接收
                res.on('end',function(){
                    result = Buffer.concat(buffer).toString('utf-8');
                    resolve(result);
                })
            })
            //监听错误事件
            .on('error',function(err){
                console.log(err);
                reject(err);
            });
            //传入数据
            req.write(data);
            req.end();
        });
    }
}
/**
 * 微信接入验证
 */
WeChat.prototype.auth = function(req,res){

	var that = this;
	this.getAccessToken().then(function(data){
		var url = util.format(that.apiURL.createMenu,that.apiDomain,data);
		that.requestPost(url,JSON.stringify(menus)).then(function(data){
            //将结果打印
            console.log(data);
        });
	})


     //1.获取微信服务器Get请求的参数 signature、timestamp、nonce、echostr
        var signature = req.query.signature,//微信加密签名
            timestamp = req.query.timestamp,//时间戳
                nonce = req.query.nonce,//随机数
            echostr = req.query.echostr;//随机字符串

        //2.将token、timestamp、nonce三个参数进行字典序排序
        var array = [this.token,timestamp,nonce];
        array.sort();

        //3.将三个参数字符串拼接成一个字符串进行sha1加密
        var tempStr = array.join('');
        const hashCode = crypto.createHash('sha1'); //创建加密类型 
        var resultCode = hashCode.update(tempStr,'utf8').digest('hex'); //对传入的字符串进行加密

        //4.开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
        if(resultCode === signature){
            res.send(echostr);
        }else{
            res.send('mismatch');
        }
}

WeChat.prototype.getAccessToken = function(){
    var that = this;
    return new Promise(function(resolve,reject){
        //获取当前时间 
        var currentTime = new Date().getTime();
		//格式化请求地址
		
		var url = util.format(that.apiURL.accessTokenApi,that.apiDomain,that.appID,that.appSerect);
        //判断 本地存储的 access_token 是否有效
        if(accessTokenJson.access_token === "" || accessTokenJson.expires_time < currentTime){
            that.requestGet(url).then(function(data){
                var result = JSON.parse(data); 
                if(data.indexOf("errcode") < 0){
                    accessTokenJson.access_token = result.access_token;
                    accessTokenJson.expires_time = new Date().getTime() + (parseInt(result.expires_in) - 200) * 1000;
                    //更新本地存储的
                    fs.writeFile('./wechat/access_token.json',JSON.stringify(accessTokenJson));
                    //将获取后的 access_token 返回
                    resolve(accessTokenJson.access_token);
                }else{
                    //将错误返回
                    resolve(result);
                } 
			});
		}
		else{
            //将本地存储的 access_token 返回
            resolve(accessTokenJson.access_token);  
        }
    });
}

//暴露可供外部访问的接口
module.exports = WeChat;