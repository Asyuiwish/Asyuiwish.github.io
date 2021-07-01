---
sidebar: true
---
## VuePress + Github
# git报错10053
git推送时报错：Connection was aborted, errno 10053  

原因：Git默认限制推送的大小，运行命令更改限制大小即可  

解决方法：  
    git config --global http.postBuffer 524288000  

# 推送成功页面未更新
解决方法： setting - pages  分支重新设置[gh-pages]