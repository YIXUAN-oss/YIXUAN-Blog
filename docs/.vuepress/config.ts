import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '懿轩的博客',
    description: '分享技术、记录生活 | YiXuan\'s Blog',
    
    // GitHub Pages 部署路径配置
    base: '/YIXUAN-Blog/',

    // 使用 Vite 打包工具
    bundler: viteBundler(),
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'keywords', content: '懿轩,YiXuan,博客,技术博客,Java,Python,前端开发' }],
        ['meta', { name: 'author', content: '懿轩' }],
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
            { text: '🏠 首页', link: '/' },
            { text: '📚 教程中心', link: '/tutorials/' },
            { text: '📝 技术文章', link: '/articles/' },
            { text: '🎁 资源分享', link: '/resources/' },
            { text: '✍️ 日常随笔', link: '/diary/' },
            { text: '👤 关于', link: '/about/' },
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
            ]
        },

        // 博客配置
        blog: {
            socialLinks: [
                { icon: 'BrandGithub', link: 'https://github.com/YIXUAN-oss' },
                { icon: 'Mail', link: 'mailto:byyi.xuan@outlook.com' },
            ]
        },

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


