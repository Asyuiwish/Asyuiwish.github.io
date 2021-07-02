# js

## 基本数据类型
![六大基本数据类型](../.vuepress/public/js_1.png)

## 强制类型转换
1. 字符串拼接
   ``` javascript
   '2' + true  //2true
   ```
2. ==运算（慎用） `除了 == null 其他都用 ===`
3. 逻辑运算
   ``` javascript
   console.log(10 && 0)  // 0  10为true
   console.log(' ' || 'abc')  // 'abc '   ' '为false
   ```
4. if语句
   ```javascript
   var a = 0
   var b = 100   if (b) {}  // true
   var c = ''   if (c) {}  // false
   
   console.log(!!a)  // 判断一个变量是true/false
   ```

## 判断是否为空对象方法
* 将json对象转化为json字符串，再判断该字符串是否为"{}"
    ``` javascript
    var data = {};
    var b = (JSON.stringify(data) == "{}");
    alert(b);//true
    ```
* for in循环判断
    ``` javascript
    var obj = {};

    var b = function() {
        for(var key in obj) {
            return false;
        }
        return true;
    }
    
    alert(b());//true

    ```
* jquery的isEmptyObject方法(将方法二封装)
    ``` javascript
    var data = {};
    var b = $.isEmptyObject(data);
    alert(b);//true
    ```
* Object对象的getOwnPropertyNames方法，返回值是对象中属性名组成的数组，通过判断数组的length来判断此对象是否为空（此方法不兼容ie8，其余浏览器没有测试）
    ``` javascript
    var data = {};
    var arr = Object.getOwnPropertyNames(data);
    alert(arr.length == 0);//true
    ```
* ES6的Object.keys()方法，原理同方法四
    ``` javascript
    var data = {};
    var arr = Object.keys(data);
    alert(arr.length == 0);//true
    ```

## 闭包
概念:`指有权访问另一个函数作用域中的变量的函数，一般情况就是在一个函数中包含另一个函数`。

作用：访问函数内部变量、保持函数在环境中一直存在，不会被垃圾回收机制处理。

<b>如果里函数引用（or访问）了外函数的某个变量，那这个变量就能享受和全局变量一样的特权。</b>

### 使用场景
1. setTimeout
   原生的setTimeout传递的第一个函数不能带参数，通过闭包可以实现传参效果。
   ``` javascript
   function f1(a) {
       function f2() {
           console.log(a);
        }
        return f2;
    }
    var fun = f1(1);
    setTimeout(fun,1000);//一秒之后打印出1
   ```
2. 回调
   ``` javascript
   function changeSize(size){
       return function(){
           document.body.style.fontSize = size + 'px';
        };
    }
    var size12 = changeSize(12);
    var size14 = changeSize(20);
    var size16 = changeSize(30);

    document.getElementById('size-12').onclick = size12;
    document.getElementById('size-20').onclick = size14;
    document.getElementById('size-30').onclick = size16;
    ```
3. 函数防抖  
   在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
   ``` javascript
   function debounce(fn,delay){
       let timer = null
       //借助闭包
       return function() {
           if(timer){
               clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
               timer = setTimeOut(fn,delay)
            }else{
                timer = setTimeOut(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
            }
        }
    }
    ```
4. 封装私有变量

### 优点和缺点  
闭包的优点：
* 方便调用上下文中声明的局部变量。
* 可以在一个函数中再创建个函数，避免了传参的问题  。

闭包的缺点：
* 使用闭包可以使函数在执行完后不被销毁，保留在内存。
中，如果大量使用闭包就会造成`内存泄露，内存消耗很大`。

## 深拷贝和浅拷贝
浅拷贝的实现方法：
1. 简单的引用复制
2. Object.assign()
    ``` javascript
    var x = {
        a: 1,
        b: { f: { g: 1 } },
        c: [ 1, 2, 3 ]
    };
    var y = Object.assign({}, x);
    console.log(y.b.f === x.b.f);     // true
    ```
3. Array的slice和concat方法(`看起来像是深拷贝。而实际上它是浅拷贝`)  

深拷贝的实现方法：
1. JSON对象的parse和stringify
parse方法:将JSON字符串反序列化成JS对象；
stringify方法：将JS对象序列化成JSON字符。
``` javascript
    //例1
    var source = { name:"source", child:{ name:"child" } } 
    var target = JSON.parse(JSON.stringify(source));
    target.name = "target";  //改变target的name属性
    console.log(source.name); //source 
    console.log(target.name); //target
    target.child.name = "target child"; //改变target的child 
    console.log(source.child.name); //child 
    console.log(target.child.name); //target child
    //例2
    var source = { name:function(){console.log(1);}, child:{ name:"child" } } 
    var target = JSON.parse(JSON.stringify(source));
    console.log(target.name); //undefined
    //例3
    var source = { name:function(){console.log(1);}, child:new RegExp("e") }
    var target = JSON.parse(JSON.stringify(source));
    console.log(target.name); //undefined
    console.log(target.child); //Object {}
```
2. jQuery.extend()
3. 手写递归
    ``` javascript
    function deepClone1(obj) { //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
        var objClone = Array.isArray(obj) ? [] : {}; //进行深拷贝的不能为空，并且是对象或者是数组
        if (obj && typeof obj === "object") {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === "object") {
                        objClone[key] = deepClone1(obj[key]);
                    } else {
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }
    ``` 
<b>区别：浅拷贝只复制指针，深拷贝会另外创造一个一模一样的对象。</b>





