const readline = require('readline');
const fs = require('fs');
const path = require('path');


// function creatHtml() {
//     let p = require('./point.js');
//     let k = require('./keyspec.js');

//     p.creatHtml();
//     k.creatHtml();
// }

// function concatHtml() {
    let point = fs.readFileSync(path.join(__dirname, "../output/point.html"))
    let keyspec = fs.readFileSync(path.join(__dirname, "../output/keyspec.html"))
    let str = point + keyspec;

    fs.writeFile(path.join(__dirname, "../output/pointKey.html"), str, function (err) {
        if (err) {

        } else {
            console.log('pointKey文件success');
            fs.unlink(path.join(__dirname, "../output/point.html"), function (err) {
                if (err) {

                } else {
                    console.log("point删除成功");
                }
            })
            fs.unlink(path.join(__dirname, "../output/keyspec.html"), function (err) {
                if (err) {

                } else {
                    console.log("keyspec删除成功");
                }
            })
        }
    })
// }