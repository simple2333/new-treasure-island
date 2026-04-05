import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "simple  blog",
  description: "新宝岛",
  base: '/new-treasure-island/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '散步经历', link: '/walk' },
      { text: '代码学习', link: '/code' },
      { text: '读书杂谈', link: '/read' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/simple2333' }
    ],

    footer: {
      copyright: 'Copyright © 2026-present simple'
    }
  }
})
