// find(callback[,thisArg]) --第一个参数是回调,用于找出第一个符合条件的数组成员，第二个参数是指定this的值
var arr = [5, 7, -2, -6];
var arr2 = [2, 4, 6, 8];
var arr1 = arr.find(function (value, index) {
    console.log(this);
    this.find(function (value, index) {
        console.log(value);
        console.log(index);
    })
}, arr2)


var arr = [1, 4, 7, 4, 3, 2, 1, 4, 7]; 
var newArr = []; 
for (var i = 0; i < arr.length; i++) { 
    if (newArr.indexOf(arr[i]) === -1) { 
        newArr.push(arr[i]); 
    } 
} 
console.log(newArr);