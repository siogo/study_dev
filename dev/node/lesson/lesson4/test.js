var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var fs = require('fs');
var url = require('url');

var baseUrl = 'http://www.id97.com/';
superagent.get(baseUrl).end(function(err,res){
	if(err){
		console.log(err);
	}
	var $ = cheerio.load(res.text);
	var arr = [];
	
	$('.meta h1 a').each(function(index,ele){
		$element = $(ele);
		var href = $element.attr('href');
		var title = $element.attr('title');
		arr.push({href:href,title:title});
	})
	console.log(arr)
})