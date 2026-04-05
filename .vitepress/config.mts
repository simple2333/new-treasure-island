import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "simple  blog",
  description: "新宝岛",
  // base: '/new-treasure-island/',
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '散步经历', link: '/walk' },
      { text: '代码学习', link: '/code' },
      { text: '读书杂谈', link: '/read' },
      { text: '游戏人生', link: '/game' }
    ],

    sidebar: [
      {
        text: '散步经历',
        items: [
          { text: '向前走，自有新蝉鸣夏，晚风会绕过你的肩膀(20260403顺峰山公园)', link: '/walk/20260403' }
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
