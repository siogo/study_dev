const readline = require('readline');
const fs = require('fs');
const path = require('path');

let concat = require('./js/concat.js');
concat.creatHtml();
setTimeout(function(){
	concat.concatHtml();
},2000)