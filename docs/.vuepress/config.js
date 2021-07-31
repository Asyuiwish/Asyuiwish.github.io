module.exports = {
  title: 'Yui的学习笔记',  // 设置网站标题
  // description : 'Yui的学习笔记',
  base : '/daydayup/',
  head: [
    [
        'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
        { rel: 'icon', href: '/lemon.png' }
    ]
  ],
  themeConfig : {
    logo:'/flag.png', //title旁的logo
    // search: false,  //禁用搜索
    nav : [
        { text: '首页', link: '/' },
        { text: '细细碎碎的知识点', link: '/audition/' },
        { text: '踩坑辣写bug辣', link: '/question/' },
        { text: '记一些常用方法', link: '/function/' },
        {
          text: '开发ing',
          items: [
            { text: '没写完', link: '/audition/' },
            { text: '真的没写完', link: '/question/' }
          ]
        },
        { text: 'GitHub', link:'https://github.com/Asyuiwish' }
    ],
    sidebar:{
      '/audition/':['','browser','css','javascript','ES6','vue','browser'],
      '/question/':['','vue','rem','attention'],
      '/function/':[''],
  },
    // sidebarDepth : 2,
    lastUpdated: 'Last Updated', // string | boolean  最后更新时间
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false
  }
}
