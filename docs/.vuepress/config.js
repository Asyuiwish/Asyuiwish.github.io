module.exports = {
  title: 'Yui的学习笔记',  // 设置网站标题
  description : 'Yui的学习笔记',
  head: [
    [
        'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
        { rel: 'icon', href: 'lemon.png' }
    ]
  ],
  base : '/',
  themeConfig : {
    logo:'flag.png', //title旁的logo
    // search: false,  //禁用搜索
    nav : [
        { text: '首页', link: '/' },
        { text: '细细碎碎的知识点', link: '/audition/' },
        { text: '踩坑辣写bug辣', link: '/question/' },
        {
          text: '开发ing',
          items: [
            { text: '没写完', link: '/question/' },
            { text: '真的没写完', link: '/question/' }
          ]
        }
    ],
    sidebar:{
      '/audition/':['','css','javascript','vue'],
      '/question/':[''],
  },
    // sidebarDepth : 2,
    lastUpdated: 'Last Updated', // string | boolean  最后更新时间
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false
  }
}
