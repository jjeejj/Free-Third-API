module.exports = {
    title: 'API 接口文档管理',
    description: '简单方便的个人API文档编辑管理工具',
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
            '/user/'
        ],
        repo: 'jjeejj/API-Edit-Manage-Tool',
        docsDir: 'docs',
        docsBranch: 'master'
    },
    serviceWorker: true,
    dest: 'docs',
    base: '/',
}