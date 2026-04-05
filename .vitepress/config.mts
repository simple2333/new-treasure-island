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
      { text: '散步经历', link: '/blog/walk' },
      { text: '代码学习', link: '/blog/code' },
      { text: '读书杂谈', link: '/blog/read' },
      { text: '游戏人生', link: '/blog/game' }
    ],

    sidebar: [
      {
        text: '散步经历',
        items: [
          { text: '向前走，自有新蝉鸣夏，晚风会绕过你的肩膀(20260403顺峰山公园)', link: '/blog/walk/20260403' },
          { text: '感觉成为顺峰山公园的常客了(20260329顺峰山公园)', link: '/blog/walk/20260329' }

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
