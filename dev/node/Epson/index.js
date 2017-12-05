const readline = require('readline');
const fs = require('fs');
const path = require('path');
const {execFile} = require('child_process');

const child1 = execFile('node',[path.join(__dirname,'./js/point.js')],function(err,stdout,stderr){
	if(err){
		console.log(err);
	}else{
		console.log(stdout);
	}
})



const child2 = execFile('node',[path.join(__dirname,'./js/keyspec.js')],function(err,stdout,stderr){
	if(err){
		console.log(err);
	}else{
		console.log(stdout);
		const child3 = execFile('node',[path.join(__dirname,'./js/concat.js')],function(err,stdout,stderr){
			if(err){
				console.log(err);
			}else{
				console.log(stdout);
			}
		})
	}
})

const child4 = execFile('node',[path.join(__dirname,'./js/gaishu-2.js')],function(err,stdout,stderr){
	if(err){
		console.log(err);
	}else{
		console.log(stdout);
	}
})

const child5 = execFile('node',[path.join(__dirname,'./js/icon.js')],function(err,stdout,stderr){
	if(err){
		console.log(err);
	}else{
		console.log(stdout);
	}
})