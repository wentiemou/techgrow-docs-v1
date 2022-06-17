module.exports = {
    '/': getHomeSideBar('公众号引流'),
    '/wechat/hexo/': getWechatSidebar('公众号引流'),
    '/wechat/common/': getWechatSidebar('公众号引流'),
    '/wechat/vuepress/': getWechatSidebar('公众号引流'),
    '/wechat/vuepress2/': getWechatSidebar('公众号引流'),
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

function getHomeSideBar(group) {
    return [
        {
            title: group,
            collapsable: false,
            children: [
                '/wechat/common/', '/wechat/hexo/', '/wechat/vuepress/', '/wechat/vuepress2/',
            ]
        }
    ]
}