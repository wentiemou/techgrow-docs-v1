module.exports = {

  // 基础配置
  base: '/v1/',
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
      // 已申请的博客 ID
      blogId: '96641-5333172926158-056',
      // 已申请的微信公众号名称
      name: '全栈技术驿站',
      // 已申请的微信公众号回复关键词
      keyword: 'Tech',
      // 已申请的微信公众号二维码链接
      qrcode: 'https://www.techgrow.cn/img/wx_mp_qr.png',
      // 文章内容的选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置（可选）
      selector: 'div.theme-default-content',
      // 自定义的 JS 资源链接，可用于 CDN 加速（可选）
      libUrl: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js',
      // 自定义的 CSS 资源链接，可用于适配不同风格的博客（可选）
      cssUrl: 'https://qiniu.techgrow.cn/readmore/dist/vuepress.css',
      // 每篇文章随机添加导流工具的概率，有效范围在 0.1 ~ 1 之间，1 则表示所有文章默认都自动添加导流工具（可选）
      random: 1,
      // 排除添加导流工具的文章链接，格式为 ['/webpack', '/gulp/*', '/node/*/io']，支持使用路径、通配符、正则表达式的匹配规则（可选）
      excludes: ['/v1', '/v1/wechat/*', '/v1/contact/']
    }]
  ],

  // 监听配置
  extraWatchFiles: [
    '.vuepress/configs/navbar/zh.ts',
    '.vuepress/configs/sidebar/zh.ts'
  ]
}