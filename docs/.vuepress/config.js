module.exports = {
    title: 'Estonteco Start !',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: 'https://i.loli.net/2020/09/09/gnERW9N2bhMfjS1.png' }]
    ],
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: './components'
            }
        ]
    ],
    themeConfig: {
        logo: 'https://i.loli.net/2020/09/09/gnERW9N2bhMfjS1.png',
        search: true,
        searchMaxSuggestions: 5,
        smoothScroll: true,
        lastUpdated: '上一次编辑',
        repo: 'chendihe4975/Estonteco-help-vuepress',
        repoLabel: 'GitHub',
        docsRepo: 'chendihe4975/Estonteco-help-vuepress',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '编辑此页',
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '项目', link: '/Project/' },
            { text: '常见问题', link: '/Faq/' },
            { text: '更新日志', link: '/Log/' },
            { text: '友情链接', link: '/Link/' }
        ],
        displayAllHeaders: true,
        activeHeaderLinks: true,
        sidebar: [
            '/guide/',
            '/guide/Start/',
            '/guide/Clanbattle/',
            '/guide/Daily/',
            '/guide/Other/',
            '/guide/Advanced/',
            '/guide/Question/'
        ],
    }
}