# Attention
## 基础需要注意的点
1. p标签给行高
2. 尽量使用margin-bottom而不是margin-top
3. 写了float之后一定一定一定要清除浮动
4. 对于margin/padding的选择：
   1. 希望将其他部分包裹在盒子内作为一整个模块来看待则用padding
   2. 如果是分开的页面模块则用margin
5. li之间有空隙：`ul font-size = 0`或者将`<li></li><li></li>`连着写
6. 注意不要让内部盒子超出外部盒子，例如消除最后一个margin-bottom
7. 尽量避免使用：first-child这一类的选择器
8. icon以及一些stage可以切成一整张图，使用`background-position`定位
9. 尽量不要使用img而使用background【尽量不用就是别用】
10. 写渐变的时候加一个纯色底色，防止有些浏览器不支持导致样式错乱
11. 写css样式时尽量不级联，不要一层一层嵌套css
12. 给图片、css、js文件引入时添加?v=日期格式版本号

## 命名规范

__ 双下划线分隔  
--active 状态 

## 将图标转换为font

## 104语法代码
chmod + r* 权限修改  
rm -rf xxx.js 删除文件/文件夹

## cms相关
新建站点/修改title、description、keywords