# 莫名其妙的一些bug
## VuePress + Github git报错10053
git推送时报错：Connection was aborted, errno 10053  

>Git默认限制推送的大小，运行命令更改限制大小即可  

解决方法：  
    git config --global http.postBuffer 524288000  

## 谷歌自动翻译问题
后端接口返回数据正确，前端页面的显示总是错误，或者刷新的0.5秒内写死的文本内容出现错误

>Chrome 如果设置了自动翻译会引发页面文字乱码以及页面崩溃和页面不刷新等问题

解决办法：  
    1. 手动禁用翻译  
    2. 代码禁用翻译 `<html translate="no">`  
    3. 代码设置语言 `<html lang="zh-CN"> `
