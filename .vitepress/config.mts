import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "simple  blog",
  description: "新宝岛",
  // base: '/new-treasure-island/',
  themeConfig: {
    logo: 'logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '散步经历', link: '/blog/walk' },
      { text: '代码学习', link: '/blog/code' },
      { text: '读书杂谈', link: '/blog/read' },
      { text: '游戏人生', link: '/blog/game' }
    ],
    sidebar: {
      'blog/walk':[
        {
          text: '散步经历',
          items: [
            { text: '14.向前走，自有新蝉鸣夏，晚风会绕过你的肩膀(20260403顺峰山公园)', link: '/blog/walk/20260403' },
            { text: '13.感觉成为顺峰山公园的常客了(20260329顺峰山公园)', link: '/blog/walk/20260329' },
            { text: '12.祝你在顺峰山的晚风中感受到美好(20260328顺峰山公园)', link: '/blog/walk/20260328' },
            { text: '11.夜晚去顺峰山公园散步(20260325顺峰山公园)', link: '/blog/walk/20260325' },
            { text: '10.荔湾湖公园散步(20260323荔湾湖公园)', link: '/blog/walk/20260323' },
            { text: '9.顺峰山公园Vlog(20260315顺峰山公园)', link: '/blog/walk/20260315' },
            { text: '8.天河公园散步(20260209天河公园)', link: '/blog/walk/20260209' },
            { text: '7.华南植物园散步(20260207华南植物园)', link: '/blog/walk/20260207' },  
            { text: '6.越秀公园 云道散步(20260201越秀公园)', link: '/blog/walk/20260201' },   
            { text: '5.广州动物园 天河公园 花鸟虫鱼新世界散步(20250405广州动物园)', link: '/blog/walk/20250405' },  
            { text: '4.荔湾湖 流花湖公园散步(20250112荔湾湖、流花湖公园)', link: '/blog/walk/20250112' },  
            { text: '3.越秀公园散步(20241222越秀公园)', link: '/blog/walk/20241222' },  
            { text: '2.黄花岗公园散步(20241207黄花岗公园)', link: '/blog/walk/20241207' },  
            { text: '1.海珠湖公园散步(20241130海珠湖公园)', link: '/blog/walk/20241130' },   

          ]
        }
      ],
      'blog/code':[
        {
          text: '代码学习',
          items: [
            { text: '1.我的转码之路', link: '/blog/code/start' },
          ]
        }
      ],
      'blog/read':[
        {
          text: '读书杂谈',
          items: [
            { text: '西线无战事', link: '/blog/read/西线无战事' },
          ]
        }
      ],
      'blog/game':[
        {
          text: '游戏人生',
          items: [
            { text: '奇异人生', link: '/blog/game/奇异人生' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/simple2333' }
    ],

    footer: {
      copyright: 'Copyright © 2026-present simple'
    }
  }
})
