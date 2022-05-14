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

  // 插件配置
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
    ['vuepress-plugin-readmore-popular', {
      blogId: '96641-5333172926158-056',
      name: '全栈技术驿站',
      keyword: 'Tech',
      qrcode: 'https://www.techgrow.cn/img/wx_mp_qr.png',
      random: 0.9,
      lockToc: 'yes',
      selector: 'div.theme-default-content',
      libUrl: 'https://qiniu.techgrow.cn/js/readmore.js',
      cssUrl: 'https://qiniu.techgrow.cn/css/vuepress.css'
    }]
  ],

  // 监听配置
  extraWatchFiles: [
    '.vuepress/configs/navbar/zh.ts',
    '.vuepress/configs/sidebar/zh.ts'
  ]
}