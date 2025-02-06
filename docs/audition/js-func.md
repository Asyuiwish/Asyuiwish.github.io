# Js常用函数
## 获取当前时间戳
第一种方法：(这种方法只精确到秒)
``` js
var timestamp = Date.parse(new Date());  //1545816450000
```
第二种方法：
``` js
var timestamp=new Date().getTime();  //1545816456780
```
第三种方法： 
``` js
var timestamp=new Date().getTime();   //1545816456780
```
第一种：获取的时间戳是把毫秒改成000显示，因为这种方式只精确到秒
第二种和第三种是获取了当前毫秒的时间戳。

添加一个遇到的问题
``` js
var sDate = '2018-12-12'; 
var now = new Date();
var inputDate =Date.parse(sDate );//输入时间戳 
now.setTime(inputDate)//Wed Dec 12 2018 08:00:00 GMT+0800 (中国标准时间) 时间转化时默认8点开始，8：00：00
```

## Math
Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。Math 不是一个函数对象。

### Math.abs()
`Math.abs(x)` 函数返回指定数字 “x“ 的绝对值。
```js
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs("string"); // NaN
Math.abs();         // NaN
```

### Math.ceil()
`Math.ceil()` 函数返回大于或等于一个给定数字的最小整数。
``` js
console.log(Math.ceil(7.004));  // 8
console.log(Math.ceil(-7.004));  // -7
```

### Math.floor()
`Math.floor(x)` 向下取整。
``` js
Math.floor( 45.05);  // 45
Math.floor(-45.05);  // -46
```

### Math.max()和Math.min()
`Math.max(x,y,z)` 函数返回一组数中的最大值。  
`Math.min(...arr)` 函数返回一组数中的最小值。
::: tip 注意
使用的时候如果对象为数组则需要展开
:::
``` js 
Math.min(2,3,4)  //2
const arr = [1, 3, 2];
console.log(Math.max(...arr));  // 3
```

### Math.random()
`Math.random()` 函数返回一个浮点数,  伪随机数在范围从0到小于1，也就是说，从0（包括0）往上，但是不包括1（排除1），然后可以缩放到所需的范围。
``` js 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);  //取整
}
console.log(getRandomInt(3));  // 0, 1 or 2
console.log(getRandomInt(1));  // 0
console.log(Math.random());  // from 0 to <1
```
随机结果同时包含最小值和最大值:
``` js 
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
```

### Math.round()
`Math.round(x)` 返回一个数字四舍五入后最接近的整数。  

### Math.sign()
`Math.sign(x)` 函数返回一个数字的符号, 指示数字是正数，负数还是零。
``` js
//函数共有5种返回值, 分别是 1, -1, 0, -0, NaN. 代表的各是正数, 负数, 正零, 负零, NaN
Math.sign(3);     //  1
Math.sign(-3);    // -1
Math.sign("-3");  // -1
Math.sign(0);     //  0
Math.sign(-0);    // -0
Math.sign(NaN);   // NaN
Math.sign("foo"); // NaN
Math.sign();      // NaN
```

### Math.trunc()
`Math.trunc()` 方法会将数字的小数部分去掉，只保留整数部分。