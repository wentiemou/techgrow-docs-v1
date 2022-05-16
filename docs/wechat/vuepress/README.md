---
title: VuePress v1 博客
description: VuePress v1 博客导流微信公众号
---

## 前言

VuePress v1 博客建议安装 [vuepress-plugin-readmore-popular](https://github.com/rqh656418510/vuepress-plugin-readmore-popular) 插件，将 [TechGrow](https://open.techgrow.cn) 的免费微信公众号导流工具整合到博客中，用户扫码关注微信公众号后可以解锁全站文章，让微信公众号的粉丝数躺着增长。

::: tip 提示
`vuepress-plugin-readmore-popular` 只支持 VuePress v1，暂时不支持 VuePress v2。
:::

## 特色功能

- 支持随机为博客添加导流功能
- 支持关闭某篇文章的导流功能
- 支持查询用户解锁文章的历史记录
- 支持自定义 CSS 样式，轻松适配不同风格的博客

## 注册博客

浏览器访问 [TechGrow](https://open.techgrow.cn) 的官网 ，注册并登录账号后，进入博客的后台管理页面。首先点击左侧的菜单 `博客注册`，然后点击 `新增` 按钮，添加自己博客的信息。博客注册成功后，记录下 `博客 ID`，后面的步骤会使用到

<img src='https://www.techgrow.cn/uploads/2022/02/28/717e14eb59dd44dea62d6a0b7549abfd.png' style='pointer-events:none;'/>

## 设置公众号

在微信公众号的后台管理页面，菜单栏里选择 `自动回复` - `关键词回复`，启用 `自动回复`，然后点击 `添加回复` 按钮：

<img src='https://www.techgrow.cn/uploads/2022/02/28/em64p7w8wlqtt0rsjop0jjeywx29m25w.png' style='pointer-events:none;'/>

填写 `规则名称`、`关键词（当初你在 TechGrow 中设置的）`、`回复内容` 选择 `文字`，然后 `回复文字` 的内容填写获取博客解锁验证码的链接，如下所示（请自行更改 `xxxxx-xxxxxxxxx-xxx` 为你申请到的博客 ID）

``` html
<a href="https://open.techgrow.cn/#/readmore/captcha/generate?blogId=xxxxx-xxxxxxxxx-xxx">点击链接，获取博客解锁验证码</a>
```

<img src='https://www.techgrow.cn/uploads/2022/02/28/yd89wbdji196ixtwzgzamw37fbein1ia.png' style='pointer-events:none;'/>

此时，当读者关注你的微信公众号，并输入关键词后（比如我设置的关键词就是 `tech`），那么读者就会自动接收到获取博客解锁验证码的链接

## 安装插件

- 运行 `npm install` 命令安装插件到本地博客

``` sh
$ npm install vuepress-plugin-readmore-popular --save
```

## 配置 VuePress

编辑 VuePress 的主配置文件（例如 `.vuepress/config.js`），新增插件的配置信息（请自行更改博客相关的信息），如下所示：

``` js
module.exports = {
  plugins: [
    ['vuepress-plugin-readmore-popular', {
      // 已申请的博客 ID
      blogId: '18762-1609305354821-257',
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
      excludes: []
    }]
  ]
}
```

## 验证插件效果

打开文章页面，若文章自动隐藏了部分内容，并且出现了 `阅读全文` 按钮，则说明导流插件正常运行，如下图所示：

![](https://www.techgrow.cn/uploads/2022/02/28/g7v4su56sx5g95qipmzh0k1hknj6fsa7.png)

点击 `阅读全文` 按钮，会弹出微信公众号的二维码窗口，如下图所示：

![](https://www.techgrow.cn/uploads/2022/02/28/77o3g5fhjovtu725vm8z42lemqt8zwli.png)

## 取消阅读限制

若希望关闭部分文章的微信公众号导流功能，可以使用插件的 `excludes` 参数来实现。值得一提的是，`excludes` 参数的值是一个数组，其中的数组元素可以是字符串或者正则表达式。

- 根据 URL 路径，关闭某篇文章的导流功能

``` js
module.exports = {
  plugins: [
    ['vuepress-plugin-readmore-popular', {
      excludes: ['/fontend/webpack']
    }]
  ]
}
```

- 根据 URL 通配符，关闭某个目录下的所有文章的导流功能

``` js
module.exports = {
  plugins: [
    ['vuepress-plugin-readmore-popular', {
      excludes: ['/fontend/*', '/backend/*/io']
    }]
  ]
}
```

- 根据 URL 正则表达式，关闭符合规则的所有文章的导流功能


``` js
module.exports = {
  plugins: [
    ['vuepress-plugin-readmore-popular', {
      excludes: [/\/fontend\/.+?\/note/]
    }]
  ]
}
```

## 自定义样式

插件默认使用了定义在 [vuepress.css](https://qiniu.techgrow.cn/readmore/dist/vuepress.css) 的 CSS 样式，你可以使用以下两种方式自定义自己的样式：

- 第一种方式：更改博客主题的 CSS 源码文件，将自定义的 CSS 样式添加到里面
- 第二种方式：创建独立的 CSS 文件，并将其存放在自己的博客里，同时通过插件的 `cssUrl` 配置参数来指定其访问的 URL 路径

> 提示：为了方便日后维护，强烈建议使用第二种方式来添加自定义样式

## 在线演示

- [官方 Demo](/demo/)