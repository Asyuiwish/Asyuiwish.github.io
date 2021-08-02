# Jq常用方法
## jQuery.inArray()方法
定义：用于在数组中查找指定值【判断某个值是否在数组中】，并返回它的索引值（如果没有找到，则返回-1）  
语法：`$.inArray( value, array [, fromIndex ] )`
::: tip fromIndex
可选。Number类型 指定从数组的指定索引位置开始查找，默认为 0
:::
``` js
<div>"John" 在索引值为 <span></span> 的位置被找到</div>
<div>"Karl" 未被找到，所以返回 <span></span> </div>
<div>"Pete" 在数组中，但是不在索引值大于3的位置，所以返回 <span></span></div>
<script>
$(function () { 
    var arr = ["Pete", 8, "John" ];
    var $spans = $( "span" );
    $spans.eq( 0 ).text( jQuery.inArray( "John", arr ) );  //3
    $spans.eq( 1 ).text( jQuery.inArray( "Karl", arr ) );  //-1
    $spans.eq( 2 ).text( jQuery.inArray( "Pete", arr, 3 ) );  //-1
})
</script>
```