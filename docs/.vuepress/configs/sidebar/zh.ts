module.exports = {
    '/demo/': getWechatSidebar('在线演示'),
    '/contact/': getWechatSidebar('了解更多'),
    '/wechat/hexo/': getWechatSidebar('公众号导流'),
    '/wechat/common/': getWechatSidebar('公众号导流'),
    '/wechat/vuepress/': getWechatSidebar('公众号导流')
}

function getWechatSidebar(group) {
    return [
        {
            title: group,
            collapsable: false,
            children: [
                '',
            ]
        }
    ]
}