const pinyin = require('pinyin');
const { slugify: _slugify } = require('@vuepress/shared-utils');

module.exports = {
    title: 'Estonteco Start !',
    description: '于 QQ 平台上为 公主连结 玩家定制的一套应答服务。',
    plugins: {
        '@vuepress/google-analytics': {
            ga: 'UA-175901707-1',
        },
        '@vuepress/back-to-top': true,
        '@vuepress/register-components' : true
    },
    markdown: {
        anchor: {
            level: 999,
        },
        extendMarkdown: (md) => {
            md.use(require('../.format/md/hierarchySlug'), {
                slugify: function (s) {
                    return _slugify(
                        pinyin(s, {
                            style: pinyin.STYLE_NORMAL,
                            heteronym: true,
                            segment: true,
                        })
                            .map((item) => item[0])
                            .join('-')
                    );
                },
                level: 2,
                permalink: true,
                permalinkBefore: true,
                permalinkSymbol: '#',
            });
        },
    },
    head: [
        ['link', { rel: 'icon', href: 'https://i.loli.net/2020/11/12/WzMnSE8LciTlU25.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'application-name', content: 'NoneBot' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'NoneBot' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['link', { rel: 'apple-touch-icon', href: 'https://i.loli.net/2020/11/12/WzMnSE8LciTlU25.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileImage', content: 'https://i.loli.net/2020/11/12/WzMnSE8LciTlU25.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }]
    ],
    themeConfig: {
        repo: 'chendihe4975/Estonteco-help-vuepress',
        displayAllHeaders: true,
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑此页',
        lastUpdated: '上次更新时间',
        activeHeaderLinks: true,
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '进阶', link: '/advanced/' },
            { text: '项目', link: '/project/' },
            { text: '常见问题', link: '/faq/' },
            { text: '更新日志', link: '/log/' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '',
                        'start',
                        'clanbattle',
                        'base',
                        'next'
                    ]
                }
            ],
            '/advanced/': [
                {
                    title: '进阶',
                    collapsable: false,
                    children: [
                        '',
                        'more',
                        'cqps',
                        'scheduler',
                        'end'
                    ]
                }
            ],
            '/project/': [
                {
                    title: '项目',
                    collapsable: false,
                    children: [
                        '',
                        'about',
                        'thanks',
                        'todo',
                        'link'
                    ]
                }
            ],
            '/faq/': [
                {
                    title: '常见问题',
                    collapsable: false,
                    children: [
                        '',
                        'ula'
                    ]
                }
            ],
            '/log/': [
                {
                    title: '更新日志',
                    collapsable: false,
                    children: [
                        ''
                    ]
                }
            ]
        },
    },
};
