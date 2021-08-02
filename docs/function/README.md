# Js/Jq
## 时间戳相关
``` js
//时间戳 -> 标准格式
function getLocalTime(nS) { 
  return new Date(parseInt(nS) * 1000);
}
```
``` js
//时间戳 -> 2021712
function format(t) { 
  var d = getLocalTime(t); //时间戳 -> 标准格式
  return d.getFullYear() + '' + (d.getMonth() + 1) + (d.getDate()); //标准格式 -> 2021712
}
//也可以转换成xx年xx月xx日
```