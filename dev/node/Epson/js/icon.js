var fs = require('fs');
var path = require('path');
var readline = require('readline');

var input = fs.createReadStream(path.join(__dirname, "../input/icon.txt"));
var url = fs.readFileSync(path.join(__dirname, "../input/url.txt"));
var temp = [];

const r1 = readline.createInterface({
    input: input
})

r1.on('line',function(line){
    temp.push(line);
})

r1.on('close',function(line){
    let DivCont = `<div class="responseWidthW keyFeature">`;
    let DivCont2 = `<div class="responseWidth">`;
    let DivEnd = '</div>';
    let str = ''

    for(let i = 0;i < temp.length;i++){
        str = str + `<div class="keyFeatureItem"><div class="keyFeatureImg"><img alt="${temp[i]}" src="${url}icon-${i+1}.png"></div><div class="keyFeatureText">${temp[i]}</div></div>`;
    }

    str = `<div class="responseWidthW keyFeature"><div class="responseWidth">${str}</div></div>`

    fs.exists(path.join(__dirname, '../output/icon.html'), function (exists) {
        if (exists) {
            fs.writeFile(path.join(__dirname, '../output/icon.html'), str, function (err) {
                if(err){
                    console.log(err);
                }else{
                    console.log('文件写入成功');
                }
            });
        } else {
            fs.writeFile(path.join(__dirname, '../output/icon.html'), str, function (err) {
                if(err){
                    console.log(err);
                }else{
                    console.log('文件写入成功');
                }
            });
        }
    })
})