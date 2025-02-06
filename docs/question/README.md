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


## 登陆状态失效问题
本地请求weblogin成功登陆后刷新页面，登录状态消失  
项目中发现第一次请求成功之后返回的sessionId并未存到浏览器的cookie中，响应请求之后的set-cookie操作均未成功，cookie都没有被写入。  

>跨根域无法写入异域的cookie

解决办法:(具体见<b>[同源策略](./browser.md)</b>)  
    1. document.domain属性  
    2. 跨域资源共享  
    3. 跨文档通信  
    4. JSONP  
    5. WebSocket