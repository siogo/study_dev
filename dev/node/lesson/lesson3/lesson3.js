var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');
var fs = require('fs');

var app = express();

app.get('/',function(req,res,next){
    superagent.get('https://cnodejs.org/')
    .end(function(err,sres){
        if(err){
            return next(err);
        }
        var $ = cheerio.load(sres.text);
        var items = [];
        var a;
        $('#topic_list .topic_title').each(function(index,ele){
            // console.log($element);
            // items.push($element);
            var $element = $(ele);
            items.push({
                title: ele.attribs.title,
                href: $element.attr('href')
            });
            a = ele;
        })
        console.log('************************************')
        console.log(a.attribs);
        res.send(items);
    })
})

app.listen(3001,function(){
    console.log('app is listening at port 3001');
})
