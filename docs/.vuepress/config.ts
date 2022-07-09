module.exports = {

  // 基础配置
  base: '/v1/',
  head: [
    ['meta', { name: 'application-name', content: 'TechGrow 开放平台' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'TechGrow 开放平台' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '30x30', href: `/images/icons/favicon-30x30.png` }]
  ],

  // 多语言配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'TechGrow 开放平台',
      description: '专注于自媒体引流的免费开放平台，支持公众号、百家号、头条号、抖音号等自媒体平台的引流。',
    }
  },
  
  // 主题配置
  theme: '@vuepress/vue',
  themeConfig: {
    sidebarDepth: 3,
    smoothScroll: true,
    displayAllHeaders: false,
    editLinks: true,
    lastUpdated: '上次更新',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'rqh656418510/techgrow-docs-v1',
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        nav: require('./configs/navbar/zh.ts'),
        sidebar: require('./configs/sidebar/zh.ts')
      }
    }
  },

  // 插件配置
  plugins: [
    ['@mr-hope/copy-code', {
      duration: 1000,
      showInMobile: true
    }],
    ['@vuepress/back-to-top', true],
    ['vuepress-plugin-medium-zoom', true],
    ['vuepress-plugin-baidu-seo', {
      ignoreLocal: true,
      hm: '43c937a5b15d4206e725c4d25d1168d2'
    }],
    ['sitemap', {
      hostname: 'https://docs.techgrow.cn',
      exclude: ['/404.html']
    }],
    ['vuepress-plugin-readmore-popular', {
      // 已申请的博客 ID
      blogId: '80382-9611561604493-589',
      // 已申请的微信公众号名称
      name: '全栈技术驿站',
      // 已申请的微信公众号回复关键词
      keyword: 'Tech',
      // 已申请的微信公众号二维码图片
      qrcode: 'https://www.techgrow.cn/img/wx_mp_qr.png',
      // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
      selector: 'div.theme-default-content',
      // 自定义的 JS 资源链接，可用于 CDN 加速
      libUrl: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js',
      // 自定义的 CSS 资源链接，可用于适配不同风格的博客
      cssUrl: 'https://docs.techgrow.cn/v1/css/vuepress.css',
      // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
      excludes: { strExp: [], regExp: ['^(?!\/v1/demo).*'] },
      // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
      reverse: false,
      // 文章解锁后凭证的有效天数
      expires: 365,
      // 定时校验凭证有效性的时间间隔（秒）
      interval: 30,
      // 每篇文章随机添加引流工具的概率，有效范围在 0.1 ~ 1 之间，1 则表示所有文章默认都自动添加引流工具
      random: 1
    }]
  ],

  // 监听配置
  extraWatchFiles: [
    '.vuepress/configs/navbar/zh.ts',
    '.vuepress/configs/sidebar/zh.ts'
  ],

  // Markdown配置
  markdown: {
    lineNumbers: false
  }

}