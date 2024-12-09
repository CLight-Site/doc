import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clight-Site",
  description: "萃光小站是一个西大名下（）的论坛类网站，由学生开发维护，暂定为学生提供交流及其资源管理等服务。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '资源导航', link: '/resource/' }
    ],

    sidebar: [
      {
        text: '资源导航',
        items: [
          {text:"总览", link: '/resource/'},
          { text: 'CET', items: [
              { text: '四级', link: '/resource/CET/cet4' },
              { text: '六级', link: '/resource/CET/cet6' },
            ] },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CLight-Site' }
    ]
  }
})
