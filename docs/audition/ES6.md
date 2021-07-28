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

## 数组的方法
* `forEach(value,index,array)`遍历数组  
  ``` js
  var colors=['red','green','yellow'];
  colors.forEach(function(color){
    console.log(color)
  })

  let arr=[1,2,3];
  arr.forEach(function(value,key,arr){
    console.log(value);  //-->1,2,3
    //console.log(key);  //-->0,1,2
    //console.log(arr); //-->arr
  });
  ```
  <b>无return，即使有return也不会返回任何值，并且会影响原来的数组。</b>
  ``` js
  var arr = [1,2,3,4]; 
  var res = arr.forEach((item,index,arr)=>{
    arr[index] = item * 2;
    return arr 
  })
  console.log(arr); // [2,4,6,8]
  console.log(res); // undefined 
  ```

* `map(value,index,array)`映射数组  
  ``` js
  var arr = [1,2,3,4]; 
  var doubles = arr.map(function(x){
    renturn x * 2;
  })
  //arr不变，doubles变成[2,4,6,8]

  var cars=[
    {model:"buick",price:"cheap"},
    {model:"bmw",price:"expensive"},
  ];

  var prices=cars.map(function(car){
    return cars.price
  });
  console.log(prices)
  //将A数组中对像某个属性的值存储到B数组中
  ```
  <b>map需要返回值，如果不给return默认返回的是undefined。map返回的是`新数组`。</b>

* `filter`过滤
  ``` js
  let product=[
    {name:'cucumber',type:'vegetable',price:5},
    {name:'banana',type:'fruit',price:5},
    {name:'celery',type:'vegetable',price:12},
    {name:'orange',type:'fruit',price:5},
  ];

  let filter2=products.filter(function(product){
    return product.type=="vegetable"
  });

  //过滤多个满足条件对象
  let newProduct=product.filter(function(product){
    return product.type==="vegetable" && product.price > 0  && product.price < 10 
  });
  console.log(newProduct);

  //根据A中id值，过滤掉B数组中不符合的数据
  let post={id:4,title:"javascript"};
  let comments=[
    {postId:4,content:"vue"},
    {postId:3,content:"vue2.0"},
    {postId:2,content:"vue3.0"},
    {postId:2,content:"Node.js"}
  ];

  function commentForPost(post,comments){
    return comments.filter(function(comment){
      return comment.postId==post.id
    });
  };
  console.log(commentForPost(post,comments));
  ```  

* `find()`找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索
  ``` js
  let users=[
    {name:"jill"},
    {name:"tome"},
    {name:"bill"}
  ];

  let user;
  user=users.find(function(user){
    return user.name=="tome";
  })
  ```

* `concat()`连接数组（不改变原数组）
  ``` js
  var arr1 = [1,2,3];
  var arr2 = [4,5];
  var arr3 = arr1.concat(arr2);
  //arr3 = [1,2,3,4,5]
  ```

* `join()`把数组中的所有元素放入一个字符串默认用‘，’分割（不改变原数组）
  ``` js
  var arr = [2,3,4]
  console.log(arr.join());  //2,3,4
  ```

* `push()`向数组末尾添加元素，<b>返回新的长度</b>（会改变原数组）
  ``` js
  var a = [2,3,4];
  var b = a.push(5)
  console.log(a);  //[2,3,4,5]
  console.log(b)  //4
  //可以一次添加多个元素，push（data1，data2...）
  ```
* `shift()`删除第一个元素，<b>返回第一个元素</b>（会改变原数组）
  ``` js
  var arr = [2,3,4];
  console.log(arr.shift());  //[3,4]
  console.log(arr)  //2
  ```
* `unshift()`向数组的开头添加一个或更多元素，<b>返回新的长度</b>（会改变原数组）
  ``` js
  var arr = [2,3,4,5];
  console.log(arr.unshift(3,6));  //6
  console.log(arr)  //[2,6,2,3,4,5]
  //可以不传参数，不传参数则不增加元素
  ```

* `pop()`删除最后一个元素，<b>返回最后一个元素</b>（会改变原数组）
  ``` js
  var arr = [2,3,4];
  console.log(arr.pop());  //4
  console.log(arr);  //[2,3]
  ```

* `slice(index,index)`<b>返回一个新的数组，包含从 start (包括该元素) 到 end （不包括该元素）的的元素</b>（不改变原数组）
  ``` js
  var arr = [2,3,4];
  console.log(arr.slice(1,3));  //[3,4]
  ```

* `splice`删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素<b>如果删除了元素，则返回的是含有被删除的元素的数组</b>（会改变原数组）
  ``` js
  var a = [5,6,7,8];
  console.log(a.splice(1,0,9));  //[]
  console.log(a);  //[5,9,6,7,8]
  var b = [5,6,7,8];
  console.log(b.splice(1,2,3));  //[6,7]
  console.log(b)  //[5,3,8]
  ```
*  