# ES6

## var / let / const
1. let 不能重复声明，var可以
2. let会产生块级作用域，且只在自己的作用域内生效，但var不受限制
3. let不存在变量提升
4. let存在暂时性死域
5. 与let区别在于，const声明的是一个常量，一旦声明就无法修改

## 箭头函数和普通函数区别
* 箭头函数是匿名函数，不能作为构造函数，不能使用new
* 箭头函数不绑定arguments，取而代之用rest参数...解决
  >rest参数，形式为：...变量名。arguments对象不是数组，只是可以下标访问而已，而rest参数是一个真正的数组。
* this的作用域不同，箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值
* 箭头函数没有原型属性
  ```js
  console.log(a.prototype);  // undefined
  ```
* 箭头函数不能当做Generator函数,不能使用yield关键字