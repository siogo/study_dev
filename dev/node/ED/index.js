var fs = require('fs');
var path = require('path');
var readline = require('readline');

var input = fs.createReadStream(path.join(__dirname, "../ED/input.txt"));
var temp = [];

const rl = readline.createInterface({
    input: input
})

rl.on('line', function (line) {
    // console.log(line);
    temp.push(line);
})

rl.on('close', function (line) {
    var str = temp[0].split('*');
    var ul = '<ul class=\"list\">';
    var splitIndex = temp.indexOf('----');
    var tableStr1 = '<table class=\"tableStyle mT10\"><tbody>';
    var tableStr2 = '<table class=\"tableStyle rtable\"><tbody>'
    for(let i = 2;i< splitIndex;i++){
        if(i == 2){
            tableStr1 = tableStr1 + '<tr class=\"txtC\"><th class=\"w30\">' + temp[i].split('*')[0] + '</th><th class=\"w70\">' + temp[i].split('*')[1] +'</th></tr>'
        }else{
            tableStr1 = tableStr1 + '<tr><td>' + temp[i].split('*')[0] + '</td><td>' + temp[i].split('*')[1] + '</td></tr>'
        }
    }
    tableStr1 = tableStr1 + '</tbody></table>';

    for(let j = splitIndex+1;j<temp.length;j++){
        if(j == splitIndex+1){
            tableStr2 = tableStr2 + '<tr class=\"txtC\"><th class=\"w5\">' + temp[j].split('*')[0] + '</th><th class=\"w10\">' + temp[j].split('*')[1] + '</th><th class=\"w15\">' + temp[j].split('*')[2] + '</th><th class=\"w20\">' + temp[j].split('*')[3] + '</th><th class=\"w20\">' + temp[j].split('*')[4] + '</th></tr>';
        }else{
            var aLinkStr = '';
            var aLink = temp[j].split('*')[2].split(',');
            for(let i = 0;i<aLink.length;i++){
                aLinkStr = aLinkStr + '<a href=\"./pdfs/' + aLink[i] + '.pdf\">' + aLink[i] +'</a><br>';
            }
            tableStr2 = tableStr2 + '<tr><td class=\"txtL\">' + temp[j].split('*')[0] + '</td><td class=\"txtC\">' + temp[j].split('*')[1] + '</td><td class=\"txtC model\">' + aLinkStr + '</td>' + '<td class=\"txtC\">' + temp[j].split('*')[3] + '</td><td class=\"txtC\">' + temp[j].split('*')[4] + '</td></tr>';
        }
    }
    tableStr2 = tableStr2 + '</tbody></table>'


    var htmlHead = `<!DOCTYPE html>
                        <html>

                        <head>
                            <meta charset="utf-8" />
                            <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
                            <title>汽车</title>
                            <link rel="stylesheet" type="text/css" href="css/ed.css" />
                    </head>
                    <body>
                        <div class="page">
                            <div class="header">
                                <img class="logo" src="images/logo.png" />
                            </div>
                            <div class="container">
                                <h2 class="title">汽车</h2>
                                <ul class="list">
                                    <li>
                                        <a href="#"> Car Navigation </a>
                                    </li>
                                    <li>
                                        <a href="#"> Wireless Communication for Automotive</a>
                                    </li>
                                    <li>
                                        <a href = "#"> Remote keyless entry </a>
                                    </li>
                                    <li>
                                        <a href = "#"> Around View Monitor / Camera system </a>
                                    </li>
                                    <li>
                                        <a href = "#"> Instrument Cluster / Clock </a>
                                    </li>
                                    <li>
                                        <a href = "#"> Electric Stability Control on Brake unit </a>
                                    </li>
                                    <li>
                                        <a href = "#"> Airbag ECU </a>
                                    </li>
                                </ul>

                                <h3 class="title">${temp[0]}</h3>

                                <img class="pic" src="${temp[1]}" />

                                ${tableStr1}

                                <h4 class="title">Epson Product</h4>

                                ${tableStr2}

                            </div>
                            <div class="footer">
                                &copy; 2017 All Rights Reserved.
                                <br /> 爱普生（中国）有限公司 沪 ICP 备 14007641 号
                            </div>
                        </div>
                    </body>
                    </html>
                    `;

    fs.writeFile(path.join(__dirname, '../ED/test.html'), htmlHead, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('文件写入成功');
        }
    });
})