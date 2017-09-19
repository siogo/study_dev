const readline = require('readline');
const fs = require('fs');

// const point = {
//     creatHtml: function () {
        let input = fs.createReadStream('../input/input.txt');

        // 将每行读到的数据保存在一个数组中
        let dataArr = [];

        const rl = readline.createInterface({
            input: input
        });
        rl.on('line', (line) => {
            if (line == '') {

            } else {
                dataArr.push(line.trim());
            }
        });
        rl.on('close', (line) => {
            console.log(dataArr);
            let ulstart = '<ul class=\"printDisplay_feature\">';
            let ulend = '<\/ul>';
            let str = '';
            for (let i = 0; i < dataArr.length; i++) {
                str = str + '<li>' + dataArr[i] + '<\/li>';
            }
            let ul = ulstart + str + ulend;
            // console.log(ul);  
            fs.writeFileSync('../output/point.html', ul)
        });
//     }
// }

// module.exports = point;