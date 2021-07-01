module.exports = {
  title: 'Yui的学习笔记',  // 设置网站标题
  description : 'Yui的学习笔记',
  base : '/',
  themeConfig : {
    search: false,
    nav : [
        { text: '主页', link: '/' },
        { text: '面试题', link: '/audition/' },
        { text: '踩过的坑', link: '/question/' },
    ],
    sidebar:{
      '/audition/':['/audition/','css','javascript','vue'],
      '/question/':['/question/'],
  },
    sidebarDepth : 2
  }
}
