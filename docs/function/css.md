# Css
## clip-path
`clip-path` 是一个CSS属性，允许开发者创建一个剪切区域，从而决定元素的哪些部分可见，哪些部分会被隐藏。通过定义这个剪切路径（clipping path），您可以创造出非矩形的裁剪形状，使元素内容按特定的几何形状展示。  
*实例可参考Demo中的clip-path shape1-5*  
``` css
/* 裁剪矩形(半径 at 圆心坐标) */
.shape{
    clip-path: inset(0 round 10px);
}
/* 裁剪圆形(半径 at 圆心坐标) */
.shape{
    clip-path: circle(50% at 50% 50%);
}
/* 裁剪椭圆(x轴半径 y轴半径 at 圆心坐标) */
.shape{
    clip-path: ellipse(25% 40% at 50% 50%);
}
/*裁剪多边形(每个顶点坐标用逗号隔开) */
.shape{
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0); //正方形
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); //正六边形
    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%); //右箭头
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); //五角星
}
```

### clip-path:解决设置border-image后border-radius不生效问题
*实例可参考Demo中的clip-path shape6*
``` css
/*  border: 10px solid;
    border-image: linear-gradient(45deg, #7bb5ee,#f08c89,#e480f1,#bae7b6) 1; 
    border-radius: 10px;
    此时的border-radius不会生效
*/  
.shape {
    background: linear-gradient(45deg, #7bb5ee,#f08c89,#e480f1,#bae7b6) ;
    border-radius: 10px;
}
.shape__inner {
    width: 100%;
    height: 100%;
    background-color: pink;
    clip-path: inset(10px round 10px);
}
```

### 实用工具
这是一个 [clip-path 在线生成器](https://css.bqrdh.com/clip-path/editor)  
