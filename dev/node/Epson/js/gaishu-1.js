var fs = require('fs');
var path = require('path');
var readline = require('readline');

const gaishu1 = {
    creatGaishu1: function () {
        var input = fs.createReadStream(path.join(__dirname, "../input/gaishu.txt"));
        var url = fs.readFileSync(path.join(__dirname, "../input/url.txt"));
        var dataArr = [];
        var twoPart = [];
        var threePart = [];
        var flag = [];
        var temp = [];
        let bigDivStart = '<div class=\"responseWidth\">';
        let hen_util = '<div class=\"hen_util\">'
        let DivEnd = '<\/div>';
        let functionItems = '<div class=\"functionItems\">';
        let itemOne = '<div class=\"item col-3\" style=\"clear:left;\">';
        let itemTwo = '<div class=\"item col-3\">';
        let str1 = '';
        let str2 = '';
        let str3 = '';
        let str = '';
        let num = 1;

        const rl = readline.createInterface({
            input: input
        })

        rl.on('line', function (line) {
            // console.log(line);
            temp.push(line);
        })

        rl.on('close', function (line) {
            var index = temp.indexOf('***');
            var index2 = temp.indexOf('---');
            for (let i = 0; i < index; i = i + 3) {
                let flag = [];
                for (let j = 0; j < 3; j++) {
                    flag.push(temp[i + j]);
                }
                dataArr.push(flag);
            }
            for (let i = index + 1; i < index2; i = i + 2) {
                let flag = [];
                for (let j = 0; j < 2; j++) {
                    flag.push(temp[i + j]);
                }
                twoPart.push(flag);
            }
            for (let i = index2 + 1; i < temp.length; i++) {
                let flag = [];
                for (let j = 0; j < 1; j++) {
                    flag.push(temp[i + j]);
                }
                threePart.push(flag);
            }

            for (let j = 0; j < dataArr.length; j++) {
                if (j % 2 == 0) {
                    // 单数
                    str1 = str1 + hen_util + '<div class=\"hen_utilL\">' +
                        '<h2>' + dataArr[j][0] + '<\/h2>' +
                        '<p class=\"hen_subhead\">' + dataArr[j][1] + '<\/p>' +
                        '<p class=\"hen_txt\" style=\'word-break:normal\'>' + dataArr[j][2] + '<\/p>' + DivEnd +
                        '<div class=\"hen_utilR\">' +
                        '<img class=\"productUtilImg\" src=\"' + url + (num++) + '.jpg' + '\">' + DivEnd +
                        '<div class=\"clearFix\">&nbsp;' + DivEnd +
                        DivEnd;
                } else {
                    // 双数
                    str1 = str1 + hen_util + '<div class=\"hen_utilL\">' +
                        '<img class=\"productUtilImg\" src=\"' + url + (num++) + '.jpg' + '\">' + DivEnd +
                        '<div class=\"hen_utilR\">' +
                        '<h2>' + dataArr[j][0] + '<\/h2>' +
                        '<p class=\"hen_subhead\">' + dataArr[j][1] + '<\/p>' +
                        '<p class=\"hen_txt\" style=\'word-break:normal\'>' + dataArr[j][2] + '<\/p>' + DivEnd +
                        '<div class=\"clearFix\">&nbsp;' + DivEnd +
                        DivEnd;
                }
            }

            for (let j = 0; j < twoPart.length; j++) {
                if (j % 3 == 0) {
                    str2 = str2 + itemOne + '<img class=\"pc2\" src=\"' + url + (num++) + '.jpg' + '\">' +
                        '<h3>' + twoPart[j][0] + '<\/h3>' +
                        '<p style=\'word-break:normal\'>' + twoPart[j][1] + '<\/p>' + DivEnd;
                } else {
                    str2 = str2 + itemTwo + '<img class=\"pc2\" src=\"' + url + (num++) + '.jpg' + '\">' +
                        '<h3>' + twoPart[j][0] + '<\/h3>' +
                        '<p style=\'word-break:normal\'>' + twoPart[j][1] + '<\/p>' + DivEnd;
                }
            }

            for (let j = 0; j < threePart.length; j++) {
                str3 = str3 + threePart[j] + '<br>';
            }

            str3 = `<div class="clearFix">&nbsp;</div><p style="color:#666; font-size:12px;">${str3}</p>`;

            str2 = functionItems + str2 + DivEnd;
            str = bigDivStart + str1 + str2 + str3 + DivEnd;



            fs.exists(path.join(__dirname, '../output/gaishu.html'), function (exists) {
                if (exists) {
                    fs.writeFile(path.join(__dirname, '../output/gaishu.html'), str, function (err) {
                        if(err){
                            console.log(err);
                        }else{
                            console.log('文件写入成功');
                        }
                    });
                } else {
                    fs.writeFile(path.join(__dirname, '../output/gaishu.html'), str, function (err) {
                        if(err){
                            console.log(err);
                        }else{
                            console.log('文件写入成功');
                        }
                    });
                }
            })
        })
    }
}

module.exports = gaishu1;