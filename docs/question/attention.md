# Attention
## 基础需要注意的点
1. p标签给行高
2. 尽量使用margin-bottom而不是margin-top
3.  
4. 对于margin/padding的选择：
   1. 希望将其他部分包裹在盒子内作为一整个模块来看待则用padding
   2. 如果是分开的页面模块则用margin
5. li之间有空隙：`ul font-size = 0`或者将<li></li><li></li>连着写
6. 注意不要让内部盒子超出外部盒子，例如消除最后一个margin-bottom
7. 尽量避免使用：first-child这一类的选择器
8. icon以及一些stage可以切成一整张图，使用`background-position`定位
## 命名规范
## 将图标转换为font