module.exports = {
    '/contact/': getEmptySidebar(),
    '/demo/': getSelfSidebar('在线演示'),
    '/wechat/hexo/': getSelfSidebar('公众号引流'),
    '/wechat/common/': getSelfSidebar('公众号引流'),
    '/wechat/vuepress/': getSelfSidebar('公众号引流'),
    '/wechat/vuepress2/': getSelfSidebar('公众号引流'),
}

function getEmptySidebar() {
    return [
        {
            title: '',
            collapsable: false,
            children: []
        }
    ]
}

function getSelfSidebar(group) {
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