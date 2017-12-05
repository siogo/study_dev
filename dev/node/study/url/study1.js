var path = require('path')
var path = require('path');



const url = require('url');
const URL2 = 'https://user:pass@sub.host.com:8080/p/a/t/h.txt?query=string#hash'
const myURL2 = url.parse(URL2);
var path2 = myURL2.path;
// console.log(path2);
console.log(path.basename(path2));
console.log(path.dirname(path2))
console.log(path.extname(path2))
console.log(path.join('pa/','/abc/','ddd'));
console.log(path.parse(path2));

