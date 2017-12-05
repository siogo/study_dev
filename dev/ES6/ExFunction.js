var x = 1;
function foo(x,y = function(){ x = 2 ;console.log(x)}){
    // var x = 3;
    y();
    console.log(x);
}


function add(...values){
    console.log(values);
}

console.log();

// 使用数组的splice -- splice(start,deleteCount,insertItem1,insertItem2,...)，返回值是截取后的字符串，但是原数组会改变
var arr = ['aaa','bbb','ccc','ddd'];
var arr1 = arr.splice(0,1,'aaa1');

function sum(...Argu){
    let total = 0;
    for(let i = 0;i<Argu.length;i++){
        total += Argu[i]
    }
    return total;
}
// 箭头函数


// 尾调用
let acc = [11,55];
let abb = sum(...acc);
console.log(abb);