import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '懿轩的博客',
    description: '分享技术、记录生活 | YiXuan\'s Blog',
    
    // 根据部署环境设置 base 路径
    // 本地开发: 使用根路径 /
    // Vercel: 使用根路径 /
    // GitHub Pages: 使用 /YIXUAN-Blog/
    base: process.env.VERCEL || process.env.NODE_ENV === 'development' ? '/' : '/YIXUAN-Blog/',

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
                    text: '第一章：Java 基础入门',
                    children: [
                        '第01章-基础入门/01-开发环境与工具',
                        '第01章-基础入门/02-变量与数据类型',
                        '第01章-基础入门/03-运算符',
                        '第01章-基础入门/04-数组'
                    ]
                },
                {
                    text: '第二章：面向对象编程',
                    children: [
                        '第02章-核心编程/01-面向对象初级',
                        '第02章-核心编程/02-面向对象中级',
                        '第02章-核心编程/03-面向对象高级'
                    ]
                },
                {
                    text: '第三章：Java 进阶编程',
                    children: [
                        '第03章-进阶编程/01-枚举与注解',
                        '第03章-进阶编程/02-异常处理',
                        '第03章-进阶编程/03-常用类',
                        '第03章-进阶编程/04-集合类',
                        '第03章-进阶编程/05-泛型',
                        '第03章-进阶编程/06-多线程',
                        '第03章-进阶编程/07-IO流文件操作',
                        '第03章-进阶编程/08-网络编程',
                        '第03章-进阶编程/09-反射',
                        '第03章-进阶编程/10-正则表达式'
                    ]
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
            ],
            '/tutorials/mysql/': [
                {
                    text: '第一章：基础篇',
                    children: [
                        '第01章-基础篇/01-数据库概念与介绍',
                        '第01章-基础篇/02-SQL基础语法'
                    ]
                },
                {
                    text: '第二章：进阶篇',
                    children: [
                        '第02章-进阶篇/03-函数详解',
                        '第02章-进阶篇/04-约束与数据完整性',
                        '第02章-进阶篇/05-多表查询与连接',
                        '第02章-进阶篇/06-事务管理'
                    ]
                },
                {
                    text: '第三章：高级篇',
                    children: [
                        '第03章-高级篇/07-存储引擎',
                        '第03章-高级篇/08-索引原理与优化',
                        '第03章-高级篇/09-SQL性能优化',
                        '第03章-高级篇/10-视图',
                        '第03章-高级篇/11-存储过程',
                        '第03章-高级篇/12-触发器',
                        '第03章-高级篇/13-锁机制'
                    ]
                },
                {
                    text: '第四章：实践练习',
                    children: [
                        '第04章-实践练习/1.数据库和表的管理',
                        '第04章-实践练习/2.数据查询',
                        '第04章-实践练习/3.索引和视图',
                        '第04章-实践练习/4.数据完整性',
                        '第04章-实践练习/5.存储过程和存储函数',
                        '第04章-实践练习/6.数据库的安全管理',
                        '第04章-实践练习/7.数据库的备份与恢复'
                    ]
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

    // 插件配置 - Algolia DocSearch
    plugins: [
        docsearchPlugin({
            appId: 'MLKOH1MKDT',
            apiKey: '5af2979d2d290ce4e9247d7f89549455',
            indexName: '懿轩的博客_pages',
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


