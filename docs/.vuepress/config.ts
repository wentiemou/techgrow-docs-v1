module.exports = {
  // 基础信息配置
  base: '/',
  lang: 'zh-CN',
  title: 'TechGrow 开放平台',
  description: 'TechGrow 开放平台的官方中文文档',
  head: [
    ['meta', { name: 'application-name', content: 'TechGrow 开放平台' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'TechGrow 开放平台' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '30x30', href: `/images/icons/favicon-30x30.png` }]
  ],

  // 主题配置
  theme: '@vuepress/vue',
  themeConfig: {
    sidebarDepth: 3,
    smoothScroll: true,
    displayAllHeaders: false,
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'rqh656418510/techgrow-docs-v1',
    locales: {
      '/': {
        lastUpdatedText: '上次更新',
        editLinkText: '在 GitHub 上编辑此页',
        nav: require('./configs/navbar/zh.ts'),
        sidebar: require('./configs/sidebar/zh.ts')
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true]
  ],
  extraWatchFiles: [
    '.vuepress/configs/navbar/zh.ts',
    '.vuepress/configs/sidebar/zh.ts',
  ]
}