const readline = require('readline');
const fs = require('fs');

let p = require('./point.js');
let k = require('./keyspec.js');

p.creatHtml();
k.creatHtml();

const concat = {
    concatHtml:function(){
        let point = fs.readFileSync('../output/point.html')
        let keyspec = fs.readFileSync('../output/keyspec.html')
        let str = point+keyspec;
        
        fs.writeFile('../output/pointKey.html',str,function(err){
            if(err){
        
            }else{
                console.log('success');
                fs.unlink('../output/point.html',function(err){
                    if(err){
        
                    }else{
                        console.log("point删除成功");
                    }
                })
                fs.unlink('../output/keyspec.html',function(err){
                    if(err){
        
                    }else{
                        console.log("keyspec删除成功");
                    }
                })
            }
        })
    }
}

module.exports = concat;