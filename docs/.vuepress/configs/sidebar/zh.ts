module.exports = {
    '/demo/': getWechatSidebar('在线演示引流'),
    '/wechat/hexo/': getWechatSidebar('公众号引流'),
    '/wechat/common/': getWechatSidebar('公众号引流'),
    '/wechat/vuepress/': getWechatSidebar('公众号引流')
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