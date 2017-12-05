var s = 'hello world';

// includes()
// console.log(s.includes('l'));

// startsWith(str,num) 检测参数是否在字符串头部
// endsWith(str,num) 检测参数是否在字符串尾部
// 使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
// console.log(s.startsWith('w'));

// repeat(num) 重复字符串
// console.log(s.repeat(4));

// padStart(num,str) 字符串头部补全，补全str至num长度，负数报错，但是-1~0会被视为0
// console.log('x'.padStart(6,'aa'));

// padEnd(num,str) 字符串尾部补全，补全str至num长度，负数报错，但是-1~0会被视为0

// 模板字符串
let str = 'return ' + '`hello ${name}`';
let func = new Function('name',str);
console.log(func('zz'));

// ？？？编译字符串


// 标签模板
let name = 'yellow';
function tag(s,ag1){}

//  ... 展开运算符
function foo(){
    console.log(...arguments);
}
foo(1,2,3,4,5,6,7,8,9,0);

let total = 30;
let msg = passthru`The total is ${total} (${total * 1.05} with tax)`;

function passthru(literals) {
    console.log(literals);
    let result = '';
    let i = 0;

    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }

    return result;
}
console.log(msg);