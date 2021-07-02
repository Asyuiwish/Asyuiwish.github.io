# Hello VuePress!  
这些玩意真的太难整了！！！  
记一些语法： 
## 代码块   
【这个代码块有点丑 想想办法】
``` html
<div>
    <p></p>
    <p></p>
</div>
```

``` css
.css{
    width:100px;
}
```

``` javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```

``` json
{
    "name":"喵喵",
}
```
> hello world!
>>hello world!

标记之外 ` 
< div>   
    < div></div>
    < div></div>
    < div></div>
< /div>
`标记之外

<!-- tab缩进 -->
    <div>   
        <div></div>
        <div></div>
        <div></div>
    </div>

## 表格  

**代码1(有序)**

注：序列`.`后 保持空格 
**演示**

1.  one
2.  two
3.  three

**代码2(无序)**

**演示**

*   one
*   two
*   three

**代码3(序表嵌套)**
**演示**

1.  one
    1.  one-1
    2.  two-2
2.  two
    *   two-1
    *   two-2

* * *

**演示**

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格单元格 | 单元格单元格 | 单元格单元格 |

* * *

## 语义标记

| 描述 | 效果 | 代码 |
| --- | --- | --- |
| 斜体 | *斜体* | `*斜体*` |
| 斜体 | *斜体* | `_斜体_` |
| 加粗 | **加粗** | `**加粗**` |
| 加粗+斜体 | ***加粗+斜体*** | `***加粗+斜体***` |
| 加粗+斜体 | ***加粗+斜体*** | `**_加粗+斜体_**` |
| 删除线 | ~~删除线~~ | `~~删除线~~` |

* * *

## 语义标签

| 描述 | 效果 | 代码 |
| --- | --- | --- |
| 斜体 | <i>斜体</i> | `<i>斜体</i>` |
| 加粗 | <b>加粗</b> | `<b>加粗</b>` |
| 强调 | <em>强调</em> | `<em>强调</em>` |
| 上标 | Z<sup>a</sup> | `Z<sup>a</sup>` |
| 下标 | Z<sub>a</sub> | `Z<sub>a</sub>` |
| 键盘文本 | 

* * *


**代码1(插入空格)**
**演示**
<pre>
< div>
< div>< /div>
< div>< /div>
< div>< /div>
< /div>
</pre>


::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::

**换行**
<br>1<br>1

## 链接
这是一个链接 [菜鸟教程](https://www.runoob.com)  
直接使用链接地址:<https://www.runoob.com>  
这个链接用 1 作为网址变量 [Google][1]  
这个链接用 runoob 作为网址变量 [Runoob][runoob]  
然后在文档的结尾为变量赋值（网址）  
## 图片
![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")  
这个链接用 2 作为网址变量 [RUNOOB][2].  
然后在文档的结尾为变量赋值（网址）
指定宽高：<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">

## 符号  
符号前面加上反斜杠来帮助插入普通的符号：\#

  [2]: http://static.runoob.com/images/runoob-logo.png
  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/