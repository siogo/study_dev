var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');

var $ = cheerio.load(`<ul class="ul"><li class="1">aaa</li><li class="2">bbb</li><li class="3">ccc</li><li class="4">ddd</li><li class="5">eee</li></ul>`);

$('.ul .1').each((index,ele)=>{
    console.log(ele);
    console.log('**********************************')
    // console.log(typeof($(ele)));
    console.log($(ele).attr('class'));
})