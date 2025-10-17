import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '懿轩的博客',
    description: '分享技术、记录生活 | YiXuan\'s Blog',
    
    // 根据部署环境设置 base 路径
    // Vercel: 使用根路径 /
    // GitHub Pages: 使用 /YIXUAN-Blog/
    base: process.env.VERCEL ? '/' : '/YIXUAN-Blog/',

    // 使用 Vite 打包工具
    bundler: viteBundler(),
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'keywords', content: '懿轩,YiXuan,博客,技术博客,Java,Python,前端开发' }],
        ['meta', { name: 'author', content: '懿轩' }],
        ['meta', { name: 'algolia-site-verification', content: 'C0FA520F857130E0' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],

    theme: recoTheme({
        // 主题样式
        style: '@vuepress-reco/style-default',

        // Logo
        logo: '/logo.png',

        // 作者信息
        author: '懿轩',
        authorAvatar: '/avatar.png',

        // 最后更新时间
        lastUpdatedText: '最后更新时间',

        // 自动设置分类
        autoSetBlogCategories: true,

        // 自动设置系列
        autoSetSeries: true,

        // 移动端优化
        catalogTitle: '目录',

        // 导航栏配置
        navbar: [
            { text: '首页', link: '/', icon: 'IconHome' },
            { text: '教程中心', link: '/tutorials/', icon: 'IconBook' },
            { text: '技术文章', link: '/posts.html', icon: 'IconArticle' },
            { text: '友情链接', link: '/friendship/', icon: 'IconGift' },
            { text: '日常随笔', link: '/diary/', icon: 'IconPen' },
            { text: '关于', link: '/about/', icon: 'IconUser' },
        ],

        // 系列配置
        series: {
            '/tutorials/java/': [
                {
                    text: 'Java 基础',
                    children: ['basic/introduction', 'basic/install', 'basic/syntax', 'basic/oop']
                },
                {
                    text: 'Java 进阶',
                    children: ['advanced/collection', 'advanced/io', 'advanced/multithreading']
                }
            ],
            '/tutorials/python/': [
                {
                    text: 'Python 基础',
                    children: ['basic/introduction', 'basic/install', 'basic/syntax', 'basic/datatype']
                },
                {
                    text: 'Python 进阶',
                    children: ['advanced/oop', 'advanced/modules', 'advanced/file-io']
                }
            ],
            '/tutorials/javascript/': [
                {
                    text: 'JavaScript 基础',
                    children: ['basic/introduction', 'basic/syntax', 'basic/dom']
                },
                {
                    text: 'JavaScript 进阶',
                    children: ['advanced/es6', 'advanced/async', 'advanced/modules']
                }
            ],
            '/tutorials/database/': [
                {
                    text: 'SQL 基础',
                    children: ['sql/introduction', 'sql/basic-query', 'sql/advanced-query']
                },
                {
                    text: 'NoSQL',
                    children: ['nosql/mongodb', 'nosql/redis']
                }
            ],
            '/tutorials/network/': [
                {
                    text: '计算机网络教程',
                    children: [
                        '计算机网络第1章（概述）',
                        '计算机网络第2章（物理层）',
                        '计算机网络第3章（数据链路层）',
                        '计算机网络第4章（网络层）',
                        '计算机网络第5章（运输层）',
                        '计算机网络第6章（应用层）'
                    ]
                }
            ],
            '/tutorials/operating-system/': [
                {
                    text: '基础篇',
                    children: ['basic/introduction', 'basic/process']
                },
                {
                    text: '核心篇',
                    children: ['core/sync', 'core/memory', 'core/filesystem', 'core/device']
                }
            ],
            '/tutorials/computer-organization/': [
                {
                    text: '基础篇',
                    children: ['basic/introduction', 'basic/data']
                },
                {
                    text: '核心篇',
                    children: ['core/memory', 'core/instruction', 'core/cpu', 'core/io']
                }
            ],
            '/tutorials/data-structures/': [
                {
                    text: '基础篇',
                    children: ['basic/array', 'basic/stack-queue', 'basic/hash']
                },
                {
                    text: '树与图',
                    children: ['tree/binary-tree', 'tree/balanced-tree', 'graph/graph']
                },
                {
                    text: '算法进阶',
                    children: ['algorithm/sort', 'algorithm/search', 'algorithm/dp', 'algorithm/greedy']
                }
            ]
        },

        // 搜索配置 - 使用内置搜索
        // 如果需要使用 Algolia，请取消注释下面的配置并填入你的信息
        // algolia: {
        //   appId: 'xxx',
        //   apiKey: 'xxx',
        //   indexName: 'xxx',
        //   inputSelector: '### REPLACE ME ####',
        //   algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
        //   debug: false
        // },

        // 博客配置
        blog: {
            socialLinks: [
                { icon: 'BrandGithub', link: 'https://github.com/YIXUAN-oss' },
                { icon: 'Mail', link: 'mailto:byyi.xuan@outlook.com' },
            ]
        },

        // 友情链接配置（已改用自定义组件 FriendshipLinks.vue）
        // 自定义组件支持分类显示，数据在组件内部维护

        // 评论配置（可选）
        // commentConfig: {
        //   type: 'giscus',
        //   options: {
        //     repo: 'YIXUAN-oss/YIXUAN-Blog',
        //     repoId: 'your-repo-id',
        //     category: 'Announcements',
        //     categoryId: 'your-category-id',
        //   },
        // },
    }),

    // 插件配置
    // 注释说明：DocSearch 需要真实的 Algolia 配置信息才能工作
    // 在获取配置信息之前，暂时使用主题内置搜索
    // 获取配置后，取消下面的注释并填入真实信息
    /*
    plugins: [
        docsearchPlugin({
            appId: 'YOUR_APP_ID',
            apiKey: 'YOUR_API_KEY',
            indexName: 'YOUR_INDEX_NAME',
            locales: {
                '/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索',
                            buttonAriaLabel: '搜索'
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: '清除查询条件',
                                resetButtonAriaLabel: '清除查询条件',
                                cancelButtonText: '取消',
                                cancelButtonAriaLabel: '取消'
                            },
                            startScreen: {
                                recentSearchesTitle: '搜索历史',
                                noRecentSearchesText: '没有搜索历史',
                                saveRecentSearchButtonTitle: '保存至搜索历史',
                                removeRecentSearchButtonTitle: '从搜索历史中移除',
                                favoriteSearchesTitle: '收藏',
                                removeFavoriteSearchButtonTitle: '从收藏中移除'
                            },
                            errorScreen: {
                                titleText: '无法获取结果',
                                helpText: '你可能需要检查你的网络连接'
                            },
                            footer: {
                                selectText: '选择',
                                navigateText: '切换',
                                closeText: '关闭',
                                searchByText: '搜索提供者'
                            },
                            noResultsScreen: {
                                noResultsText: '无法找到相关结果',
                                suggestedQueryText: '你可以尝试查询',
                                reportMissingResultsText: '你认为该查询应该有结果？',
                                reportMissingResultsLinkText: '点击反馈'
                            }
                        }
                    }
                }
            }
        })
    ],
    */

    // 多语言支持
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '懿轩的博客',
            description: '分享技术、记录生活',
        },
        '/en/': {
            lang: 'en-US',
            title: "YiXuan's Blog",
            description: 'Share technology, record life',
        }
    },
})


