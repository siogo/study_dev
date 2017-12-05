// 二进制和八进制
// 0o八进制 0b二进制，转换为10进制，用Number方法，我记得还能用parseInt()，第二个参数为进制。
// 注意二进制parseInt("546", 2);   // Digits are not valid for binary representations
var a = 0o1111;
var b = Number(a);
var c = parseInt(a,10);
var d = parseInt(101,2);

// Math对象的扩展
// 1.Math.trunc() --去除小数部分，保留整数部分
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.1))
console.log('****************')
// 2.Math.sign() --判断正负、零，共有5种值。p.s：字符串str通过 +str 能转换为对应的数字
console.log(Math.sign(-5));
console.log(Math.sign(5));
console.log(Math.sign(-0));
console.log(Math.sign(0));
console.log(Math.sign(NaN));
console.log('****************')
// 3.Math.cbrt() --立方根运算。p.s：平方：square，立方：cube
console.log(Math.cbrt(27));
console.log('****************')
// 4.Math.clz32() --返回一个数的 32 位无符号整数形式有多少个前导 0，对于小数，Math.clz32()方法只考虑整数部分。
var clz = 1;
clz = clz<<2;
console.log(clz);
console.log('****************')
// 5.Math.imul() --返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。

// 6.Math.fround() --返回一个数的单精度浮点数形式。

// 7.Math.hypot() --返回所有参数的平方和的平方根。
console.log(Math.hypot(3,4));

// 8.Math.signbit() --判断符号位是否被设置
// 如果参数是NaN，返回false
// 如果参数是 - 0，返回true
// 如果参数是负值，返回true
// 其他情况返回false