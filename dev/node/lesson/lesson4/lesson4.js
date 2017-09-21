var superagent = require('superagent');
var eventproxy = require('eventproxy');
var cheerio = require('cheerio');
var express = require('express');

var url = require('url');
var cnodeUrl = 'https://cnodejs.org/';
var ep = new eventproxy();

superagent.get(cnodeUrl).end(function(err,res){
	if(err){
		console.log(err);
	}
	
	var $ = cheerio.load(res.text);
	var topicUrls = [];
	var result = [];
	$('#topic_list .topic_title').each(function(index,ele){
		topicUrls.push(url.resolve(cnodeUrl,ele.attribs.href))
	})

	ep.after('topic_html',topicUrls.length,function(topics){
		topics = topics.map(function(topicPair){
			var topicUrl = topicPair[0];
			var topicHtml = topicPair[1];
			var $ = cheerio.load(topicHtml);

			return({
				title:$('.topic_full_title').text().trim(),
				url:topicUrl,
				firstCom:$('.reply_content').eq(0).text().trim()
			})
		})

		console.log('final:');
		console.log(topics);
	})
	
	topicUrls.forEach(function(topicUrl) {
		superagent.get(topicUrl).end(function(err,res){
			ep.emit('topic_html',[topicUrl,res.text])
		})
	});
})






// var app = express();

// app.get('/',function(req,res,next){

// })

// app.listen(3012,function(){
// 	console.log(`开始`);
// })