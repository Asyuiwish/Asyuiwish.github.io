# VUE

## vue的生命周期
![vue的生命周期](../.vuepress/public/vue_1.png)
扩展： 
![vue的生命周期](../.vuepress/public/vue_2.png)

## 路由
vue-router官方文档 [vue-router](https://router.vuejs.org/zh/)  
### vue-route钩子函数
![vue-router钩子函数](../.vuepress/public/vue_3.png)
* 无论访问哪一个路径都会触发全局钩子函数
* 单个路由里的钩子只有访问到该路由才触发
* 组件路由钩子是写在组件中访问路径，即将渲染组件时触发  
<br>
* next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  * next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
  * next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
  * next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
  * next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
  <b>确保 next 函数在任何给定的导航守卫中都被严格调用一次。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错。</b>这里有一个在用户未能验证身份时重定向到 /login 的示例：

    ``` javascript
    // BAD
    router.beforeEach((to, from, next) => {
        if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
        // 如果用户未能验证身份，则 `next` 会被调用两次
        next()
    })
    ```
    ``` javascript
    // GOOD
    router.beforeEach((to, from, next) => {
        if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
        else next()
    })
    ```
* 离开守卫-通常用来禁止用户未保存更改时离开
### 动态路由
如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：

``` javascript
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```
| 模式| 匹配路径 | $route.params |
| :----: | :----: | :----: |
| /user/:username | /user/evan | `{ username: 'evan' }` |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username:'evan', post_id: '123' }` |

### 嵌套路由

``` javascript
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```
### 重定向

``` javascript
//从a重定向到b
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})

//重定向的路由也可以是一个命名的路由
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: { name: 'foo' }}
  ]
})

//动态返回重定向目标
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
    }}
  ]
})
```
### 路由的两种模式
vue-router 默认 hash 模式。
#### hash
当 URL 改变时，页面不会重新加载。  
#### history
如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。
所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。  
路由的切换：
``` javascript
//包括 back,forward,go三个方法，对应浏览器的前进，后退，跳转操作
history.go(-2); //后退两次
history.go(2);//前进两次
history.back();//后退
history.forward();前进
```
路由的修改:

```javascript
//包括了pushState,replaceState两个方法,这两个方法接收三个参数:stateObj,title,url
history.pushState({color:'red'}, 'red', 'red'})
window.onpopstate = function(event){
    console.log(event.state)
    if(event.state && event.state.color === 'red'){
        document.body.style.color = 'red';
    }
}
history.back();
history.forward();
```
通过pushstate把页面的状态保存在state对象中，当页面的url再变回这个url时，可以通过event.state取到这个state对象，从而可以对页面状态进行还原，这里的页面状态就是页面字体颜色，其实滚动条的位置，阅读进度，组件的开关的这些页面状态都可以存储到state的里面。
## computed计算属性
计算函数，复杂的计算都应该放在这里，尽量不要直接在模板语法里面计算，在此处计算的值是会动态变的，即计算的数中有一个值变了，最终结果也会跟着变，类似于封装的计算函数,即`【计算属性是基于它们的响应式依赖进行缓存的,当其依赖的属性的值发生变化时，计算属性会重新计算，反之，则使用缓存中的属性值】`。

``` javascript
computed:{ 
    addNum:function(){ //addnum可以直接在模板语法里面用，相当于data内的值
        return Number(this.nums) + Number(this.num1) + Number(this.num2);
    }
},
```
### $watch侦听属性
`vm.$watch`监听数据变化

``` javascript
data:{
    a:1, 
    b:{ 
        c:1 
    }
}, 
watch:{
    a(val, oldVal){//普通的watch监听
        console.log("a: "+val, oldVal); 
    },
    b:{//深度监听，可监听到对象、数组的变化
        handler(val, oldVal){
            console.log("b.c: "+val.c, oldVal.c); 
        }, 
        deep:true // 深度监听 (属性变化)
    //配置项immediate，默认为false。设置之后在数据绑定时就会执行handler函数，而不是在数据改变后才执行
    } 
 }

//对于组件选项外定义的监听函数，需要手动调用unWatch（）函数进行注销

vm.$watch("a",function(val,oldVal){
 console.log(val)
```
### 和$watch侦听属性的区别
&emsp;&emsp;watch一般用于监控路由、input输入框的值特殊处理等等，它比较适合的场景是一对多（浏览器自适应、监控路由对象、监控自身属性变化），computed则是多对一和一对一（监听到数据变化从而进行某一个操作）（计算总价格、过滤某些数据）。
1. computed是计算值，只有值发生变化才会执行方法，watch是监听观察动作，有改变就执行
2. computed具有`缓存性`，数据变化时先读取缓存，值没变这不做操作，而watch没有缓存，直接执行
3. watch接收两个参数（新，旧）
4. watch可以在数据变化时做一些`异步处理`或开销大的操作

## 通信、传值的方法
### 路由传参
#### params传参
``` html
<router-link :to="{name:'Log',params:{num:666}}">显示登录页面</router-link>
<h3>子路由获取的参数：{{this.$route.params.num}}</h3>
```
::: warning 注意
上述这种利用params不显示url传参的方式会导致在刷新页面的时候，传递的值会丢失； 注意 ': to= ' 前面的冒号
:::

#### query传参  
``` js
this.$router.push({ path: '/conponentsB', query: { orderId: 123 } }) 
this.$route.query.orderId
```
<b>区别：</b>  
1. params只能用name来引入路由，query传参使用path来引入路由
2. params是路由的一部分,必须要在路由后面添加参数名。query是拼接在url后面的参数，没有也没关系  
3. 直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示

### 设置Session storage缓存
``` js
sessionStorage.setItem('缓存名称', JSON.stringify(orderData))
```
### 父传子 - props方法
``` js
//父：
<div :chuanzhi = 123>
//子：
props:['chuanzhi']
```
父子组件传值数据是异步请求，有可能数据还没有获取到但是此时已经渲染节点了  
>解决方案：可以在父组件需要传递数据的节点加上 v-if = false，异步请求获取数据后，v-if = true

``` js
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```
### 子传父 - $emit方法
``` js
//子：
methods{
  crr(){
  this.$emit("cz","传值") //用cz接收
  }
}
//父：
<route @cz = "chuanzhi">
methods{
  chuanzhi(data){
  console.log(data)
  }
}
```
### 兄弟组件传值
定义一个公共的公共实例文件bus.js，作为中间仓库来传值
``` js
//bus.js
import Vue from 'vue'
export default new Vue()
```
### VUEX
使用vuex，新建一个 sotre文件夹，分开维护 actions mutations getters

## v-modle双向绑定
<b>原理：通过Object.defineProperty()方法来进行数据劫持以及发布者-订阅模式实现</b>  

数据劫持：vue实例化的时候会去遍历所有的属性，给这些属性添加get和set方法进行数据劫持。  

发布者-订阅模式：  
1. 实现一个`监听器Observer`，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
2. 实现一个`订阅者Watcher`，可以收到属性的变化通知并执行相应的函数，从而更新视图。
3. 实现一个`解析器Compile`，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

### 组件的双向绑定
允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突。  

用v-modle传入，用$emit传出
``` js
model: {
  prop: 'checked',
  event: 'change'
},

props: {
  value: Number  //value就是v-model绑定的值
},
```

## 为什么data是一个函数
<b>只有函数构成作用域。</b>每个组件都有自己的作用域，每个实例相互独立互不影响，经过一次执行得到不同的返回结果。  

## 为什么要设置key
添加唯一标识，高效地更新虚拟DOM

## keep-alive
>keep-alive是一个抽象组件：它自身不会渲染一个DOM元素，也不会出现在父组件链中；使用keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

保存页面/组件的状态，避免组件反复创建和渲染，有效提升系统性能。  
* include包含的组件(可以为字符串，数组，以及正则表达式,只有匹配的组件会被缓存)
* exclude排除的组件(以为字符串，数组，以及正则表达式,任何匹配的组件都不会被缓存)
* max缓存组件的最大值(类型为字符或者数字,可以控制缓存组件的个数)

### 应用

``` html
<!-- 在动态组件中的应用 -->
<keep-alive :include="whiteList" :exclude="blackList" :max="amount">
     <component :is="currentComponent"></component>
</keep-alive>

<!-- 在vue-router中的应用 -->
<keep-alive :include="whiteList" :exclude="blackList" :max="amount">
    <router-view></router-view>
</keep-alive>
```

### keep-alive的销毁  
将name设置为数组，绑定在include属性  
* 使用 vuex 或者 localstroge 等全局存储方案，创建一个数组 keepAliveArr
* 将缓存组件的 name 存放于 keepAliveArr 数组中
* 将 keepAliveArr 绑定到include 属性上
* 当需要删除缓存组件时，直接删除 keepAliveArr 中的组件 name
* 当需要添加缓存组件时，向 keepAliveArr 中添加组件的 name  

## $forceUpdate  强制重新渲染
以下两种情况效果相等
``` js
i++
vm.$set(app.obj , 'a' , i )

app.obj = i
app.$forceUpdate()
```