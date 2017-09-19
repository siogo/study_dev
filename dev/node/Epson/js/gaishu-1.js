var fs = require('fs');
var path = require('path');
var readline = require('readline');

const gaishu1 = {
    creatGaishu1: function () {
        var input = fs.createReadStream(path.join(__dirname, "../input/gaishu.txt"));
        var dataArr = [];
        var twoPart = [];
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
        let str = '';
        let url = 'a';

        const rl = readline.createInterface({
            input: input
        })

        rl.on('line', function (line) {
            // console.log(line);
            temp.push(line);
        })

        rl.on('close', function (line) {
            var index = temp.indexOf('***');
            for (let i = 0; i < index; i = i + 3) {
                let flag = [];
                for (let j = 0; j < 3; j++) {
                    flag.push(temp[i + j]);
                }
                dataArr.push(flag);
            }
            for (let i = index + 1; i < temp.length; i = i + 2) {
                let flag = [];
                for (let j = 0; j < 2; j++) {
                    flag.push(temp[i + j]);
                }
                twoPart.push(flag);
            }

            for (let j = 0; j < dataArr.length; j++) {
                if (j % 2 == 0) {
                    // 单数
                    str1 = str1 + hen_util + '<div class=\"hen_utilL\">' +
                        '<h2>' + dataArr[j][0] + '<\/h2>' +
                        '<p class=\"hen_subhead\">' + dataArr[j][1] + '<\/p>' +
                        '<p class=\"hen_txt\">' + dataArr[j][2] + '<\/p>' + DivEnd +
                        '<div class=\"hen_utilR\">' +
                        '<img class=\"productUtilImg\" src=\"' + url + j + '\">' + DivEnd +
                        '<div class=\"clearFix\">&nbsp;' + DivEnd +
                        DivEnd;
                } else {
                    // 双数
                    str1 = str1 + hen_util + '<div class=\"hen_utilL\">' +
                        '<img class=\"productUtilImg\" src=\"' + url + j + '\">' + DivEnd +
                        '<div class=\"hen_utilR\">' +
                        '<h2>' + dataArr[j][0] + '<\/h2>' +
                        '<p class=\"hen_subhead\">' + dataArr[j][1] + '<\/p>' +
                        '<p class=\"hen_txt\">' + dataArr[j][2] + '<\/p>' + DivEnd +
                        '<div class=\"clearFix\">&nbsp;' + DivEnd +
                        DivEnd;
                }
            }

            for (let j = 0; j < twoPart.length; j++) {
                if (j % 3 == 0) {
                    str2 = str2 + itemOne + '<img class=\"pc2\" src=\"' + url + '\">' +
                        '<h3>' + twoPart[j][0] + '<\/h3>' +
                        '<p>' + twoPart[j][1] + '<\/p>' + DivEnd;
                } else {
                    str2 = str2 + itemTwo + '<img class=\"pc2\" src=\"' + url + '\">' +
                        '<h3>' + twoPart[j][0] + '<\/h3>' +
                        '<p>' + twoPart[j][1] + '<\/p>' + DivEnd;
                }
            }

            str2 = functionItems + str2 + DivEnd;
            str = bigDivStart + str1 + str2 + DivEnd;
            // str = bigDivStart + str + DivEnd;
            // console.log(str);



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