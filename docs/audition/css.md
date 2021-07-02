# CSS

## 响应式布局
一个网站能够兼容多个终端  
1.  百分比布局
2.  媒体查询
3.  rem响应式布局：rem单位无论嵌套层级如何，都只相对于浏览器的根元素（HTML元素）的`font-size`。`根元素`的font-size相当于提供了一个基准，当页面的size发生变化时，只需要改变font-size的值，那么以rem为固定单位的元素的大小也会发生响应的变化
4.  vw vh响应式布局
5.  弹性盒子
   
## 伪类和伪元素的区别
*   伪类  :active/:focus/:hover/:link/:visited/:first-child/:lang
*   伪元素  ::after/::berore/::first-letter/::first-line  
伪元素的本质是`创建一个有内容的虚拟容器`，可以同时使用多个伪类，只能同时使用一个伪元素

## visiblity:hidden、opticay：0和display：none
visiblity:hidden占据原先页面空间,`元素的子元素可以设置visibility: visible 显示出来`。  
display:none 引起页面重绘和回流， visiblity:hidden 只引起页面重绘。

## CSS的引入方式
1. 内联（元素）
2. 内嵌（style）
3. 外链（link）
4. 导入（@import）  
   
外链和导入的`区别`：  
* link除了加载CSS外，还可以定义RSS等其他事务；@import只能加载CSS
* link引用CSS时，在页面载入时同时加载， @import需要页面完全载入后加载
* link无兼容问题，@import低版本的浏览器不支持
* link支持使用Javascript控制DOM去改变样式；而@import不支持
  
## 画一条0.5px的线
* meta viewport(移动端)
* 缩放`:after，transform：scaleY(0.5)` 
```css
.div:after {
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 50% 100%; // 要指定origin值, 要不然会模糊
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    background: red;
}
```
0.5px边框：
``` css
.div:before {
    content: "";
    position: absolute;
    top: -50%;
    bottom: -50%;
    left: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    border: solid 1px red;
    box-sizing:border-box;
}
```

## 过渡和动画
区别：
1. 动画不需要事件触发，过渡需要。
2. 过渡只有一组（两个：开始-结束） 关键帧，动画可以设置多个。  

过渡属性: transition-property: none | all | property;  
`property` : 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。
``` css
div {
    background:red;
    transition-property: background;
    transition-duration: 2s;
}
div:hover {
    background:salmon;
}
```  

