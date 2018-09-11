module.exports = {
    title: 'API 接口文档管理',
    description: '免费的第三方API接口的收集(若有侵权,请联系我删除)',
    head: [
        ['link',{rel: 'icon',href: '/favicon.ico'}]
    ],
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        lastUpdated: 'Last Updated',
        searchMacxSuggestions: 50,
        // displayAllHeaders: true,
        activeHeaderLinks: true,
        sidebarDepth: 2,
        sidebar: [
            '/guide/',
            '/tool/'
        ],
        repo: 'jjeejj/Free-Third-API',
        docsDir: 'docs',
        docsBranch: 'master'
    },
    serviceWorker: true,
    dest: 'docs',
    base: '/',
}