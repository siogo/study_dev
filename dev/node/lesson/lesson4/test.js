var eventproxy = require('eventproxy');
var superagent = require('superagent');
var charset = require("superagent-charset");
var cheerio = require('cheerio');
var fs = require('fs');
var async = require('async');
var url = require('url');
// 并发需要访问的url
var urlList = [];
var num = 0;
var str = [];
charset(superagent); //设置字符

function trimStr(str){
	return str.replace(/(^\s*)|(\s*$)/g,"");
}

var baseUrl = 'https://www.wxdushi.com/book/2911/';

function getUrls(baseUrl){
	return new Promise((resolve,reject)=>{
		superagent.get(baseUrl).charset('gbk').end(function(err,res){
			if(err){
				reject(err);
			}
			var $ = cheerio.load(res.text);
			var lists = $('.jj_pl .list_box').find('a');
			lists.each(function(idx,element){
				var $element = $(element);
				var url = $element.attr('href');
				urlList.push(baseUrl+url);
			})
			urlList = urlList.splice(600,100);
			resolve(urlList);
		})
	})
}

var fetchUrl = function (url, callback) {
	num++;
	superagent.get(url).charset('gbk').end(function(err,res){
		if(err){ 

		}else{
			var $ = cheerio.load(res.text);
			var boxContent = $('.box_box').text().split('，.')[1];
			var boxTitle = $('.box_con h2').text();
			let temp = boxTitle + '\n' + boxContent+'\n';
			callback(null,temp);
		}
		num--;
	})
  };

getUrls(baseUrl).then(result=>{
	num++
	async.mapLimit(result,5,function(url,callback){
		fetchUrl(url,callback);
	},(err,results)=>{
		if(err){

		}else{
			fs.writeFile('./test.txt', results, function(err){
				if(err){
					console.log(err)
				}else{
					console.log(results);
					console.log('写文件操作成功');
				}
			})
		}
	})
})

