# 浏览器

## 浏览器渲染页面的过程
1. 构建对象模型（DOM,CSSOM）  
   构建过程：
   * 读取html文档/读取css文档
   * 将字节转换成字符
   * 确定tokens（标签）
   * 将tokens转换成节点
   * 以节点构建 DOM 树/CSSDOM 树
>若在构建DOM树的过程中，当 HTML 解析器遇到一个 script 标记时，即遇到了js，将立即阻塞DOM树的构建。JS会对DOM节点进行操作，浏览器无法预测未来的DOM节点的具体内容，为了防止无效操作，节省资源，只能阻塞DOM树的构建。
::: warning 注意
若在HTML头部加载JS文件，由于JS阻塞，会推迟页面的首绘。为了加快页面渲染，一般将JS文件放到HTML底部进行加载，或是对JS文件执行async或defer加载。
:::
2. 构建渲染树（RenderTree）：将 DOM 和 CSSOM 整合。
3. 布局
4. 渲染

## 浏览器加载一个资源的过程
* 浏览器根据 DNS 服务器得到域名的 IP 地址
* 向这个 IP 的机器发送 http 请求
* 服务器收到、处理并返回 http 请求
* 浏览器得到返回内容

## cookie和WebStorage
### cookie
Cookie是服务器发给客户端的特殊信息，cookie是以文本的方式保存在客户端，每次请求时都带上它，如果没有设置过期时间关闭浏览器的同时cookie生命周期结束。  
1. 判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）。如果我们删除cookie，则每次登录必须从新填写登录的相关信息。
2. 保存上次登录的时间等信息。
3. 保存上次查看的页面。
4. 浏览计数。

缺点：  
1. 大小受限
2. 用户可以操作（禁用）cookie，使功能受限。
3. 安全性较低。
4. 有些状态不可能保存在客户端。
5. 每次访问都要传送cookie给服务器，浪费带宽。
6. cookie数据有路径（path）的概念，可以限制cookie只属于某个路径下。
### session
当服务器收到请求需要创建session对象时，首先会检查客户端请求中是否包含sessionid。如果有sessionid，服务器将根据该id返回对应session对象。如果客户端请求中没有sessionid，服务器会创建新的session对象，并把sessionid在本次响应中返回给客户端。  
1. 网上商城中的购物车
2. 保存用户登录信息
3. 将某些数据放入session中，供同一用户的不同页面使用
4. 防止用户非法登录  

缺点：
1. Session保存的东西越多，就越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大。
2. 依赖于cookie（sessionID保存在cookie），如果禁用cookie，则要使用URL重写，不安全
3. 创建Session变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用session变量将会导致代码不可读而且不好维护。

### cookie和session的区别
* cookie保存在浏览器端，session保存在服务器端
* 存储内容：cookie只能保存字符串类型，以文本的方式；session能支持任何类型的对象
* 单个cookie保存的数据不能超过4kb；session大小没有限制
* 安全性：session的安全性大于cookie
  * sessionID存储在cookie中，若要攻破session首先要攻破cookie；
  * sessionID是要有人登录，或者启动session_start才会有，所以攻破cookie也不一定能得到sessionID；
  * 第二次启动session_start后，前一次的sessionID就是失效了，session过期后，sessionID也随之失效
  * sessionID是加密的;
  * 综上所述，攻击者必须在短时间内攻破加密的sessionID，这很难。

### sessionStorage和localStorage区别
* localStorage生命周期是永久，sessionStorage生命周期为当前窗口或标签页
* 相同浏览器的不同页面间可以共享相同的 localStorage（页面属于相同域名和端口）

### cookie和WebStorage的区别
* WebStorage大小一般5M或更大
* WebStorage保存在客户端，不会传送到服务器，节省网络流量
  * cookie由对服务器的请求来传递，每次都会携带在HTTP头中，而WebStorage只在请求时使用数据，不参与和服务器的通信
* WebStorag速度更快
* webStorage更安全
  * WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题
  

## XSS攻击原理及其解决办法
原理：WEB应用程序混淆了用户提交的数据和JS脚本的代码边界,导致浏览器把用户的输入当成了JS代码来执行。  

解决办法：
1. 过滤输入：在输入方面对所有用户提交内容进行可靠的输入验证，提交内容包括URL、查询关键字、http头、post数据等。
   * 输入验证
2. 转义输出：对用户输入的内容进行HTML转义，转义后可以确保用户输入的内容在浏览器中作为文本显示，而不是作为代码解析。
   * 输入内容作为文本解析
  

## 性能优化
性能优化原则：  
* 多使用内存、缓存
* 减少cpu计算，减少网络请求，减少对硬盘的读写（非前端）  
### 加载资源优化
* 静态资源的压缩合并
* 静态资源缓存
* CDN
* SSR后端渲染