const readline = require('readline');
const fs = require('fs');
const path = require('path');

const keyspec = {
    creatHtml: function () {
        // let input = fs.createReadStream('../input/keyspec.txt');
        let input = fs.createReadStream(path.join(__dirname, "../input/keyspec.txt"))

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
            let ulstart = '<ul class=\"printDisplay_util\">';
            let ulend = '<\/ul>';
            let str = '';
            for (let i = 0; i < dataArr.length; i++) {
                let str1 = dataArr[i].split('：');
                // console.log(str1[0]);
                str = str + '<li><span>' + str1[0] + '：<\/span>' + str1[1] + '<\/li>';
            }
            let ul = ulstart + str + ulend;
            // console.log(ul);  
            // fs.writeFileSync('../output/keyspec.html', ul)
            fs.writeFileSync(path.join(__dirname, "../output/keyspec.html"),ul)
            
        });
    }
}

module.exports = keyspec;