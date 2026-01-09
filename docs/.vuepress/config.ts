import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch' // 已改用主题内置 Algolia

export default defineUserConfig({
    lang: 'zh-CN',
    title: '懿轩的博客',
    description: '分享技术、记录生活 | YiXuan\'s Blog',

    // 根据部署环境设置 base 路径
    // 本地开发: 使用根路径 /
    // Vercel: 使用根路径 /
    // GitHub Pages: 使用 /YIXUAN-Blog/
    base: process.env.VERCEL || process.env.NODE_ENV === 'development' ? '/' : '/YIXUAN-Blog/',

    // 使用 Vite 打包工具，优化构建配置
    bundler: viteBundler({
        viteOptions: {
            build: {
                // 启用代码分割
                rollupOptions: {
                    output: {
                        // 手动分包策略
                        manualChunks: (id) => {
                            // node_modules 中的包单独打包
                            if (id.includes('node_modules')) {
                                // Vue 相关库单独打包
                                if (id.includes('vue') || id.includes('@vue')) {
                                    return 'vue-vendor';
                                }
                                // 主题相关库单独打包
                                if (id.includes('vuepress-theme-reco')) {
                                    return 'theme-vendor';
                                }
                                // 其他第三方库
                                return 'vendor';
                            }
                        },
                        // 优化 chunk 文件命名
                        chunkFileNames: 'assets/js/[name]-[hash].js',
                        entryFileNames: 'assets/js/[name]-[hash].js',
                        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                    },
                },
                // 启用压缩
                minify: 'terser',
                terserOptions: {
                    compress: {
                        drop_console: false, // 保留 console，方便调试
                        drop_debugger: true,
                    },
                },
                // 启用 CSS 代码分割
                cssCodeSplit: true,
                // 设置 chunk 大小警告限制
                chunkSizeWarningLimit: 1000,
                // 启用 sourcemap（生产环境可关闭以减小体积）
                sourcemap: false,
            },
            // 优化依赖预构建
            optimizeDeps: {
                include: [
                    'vue',
                    '@vuepress/client',
                    'vuepress-theme-reco',
                ],
            },
            // 服务器配置（开发环境）
            server: {
                // 启用 HTTP/2
                http2: true,
            },
        },
    }),

    // 配置 URL 格式：启用 cleanUrls 可生成不带 .html 扩展名的 URL
    // 注意：VuePress 2.x 可能不支持此配置
    // cleanUrls: true, // 如果需要，取消注释以启用
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'keywords', content: '懿轩,YiXuan,博客,技术博客,Java,Python,前端开发' }],
        ['meta', { name: 'author', content: '懿轩' }],
        ['meta', { name: 'algolia-site-verification', content: '965773E690A426DF' }],
        ['link', { rel: 'icon', href: '/favicon.png' }],
        
        // 关键资源预加载
        ['link', { rel: 'preload', href: '/logo.png', as: 'image' }],
        ['link', { rel: 'preload', href: '/avatar.png', as: 'image' }],
        
        // 图片 CDN 优化：DNS 预解析和预连接
        ['link', { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' }],
        ['link', { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: 'anonymous' }],
        // 备用 CDN 预连接（如果使用其他 CDN）
        ['link', { rel: 'dns-prefetch', href: 'https://gitcode.net' }],
        ['link', { rel: 'dns-prefetch', href: 'https://gitee.com' }],
        // Waline 评论系统预连接
        ['link', { rel: 'dns-prefetch', href: 'https://waline.yixuan.cyou' }],
        ['link', { rel: 'preconnect', href: 'https://waline.yixuan.cyou', crossorigin: 'anonymous' }],
        
        // Mermaid 图表支持 - 使用 CDN 方式，避免版本冲突
        ['link', { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js' }],
        ['script', {}, `
            (function() {
                function initMermaid() {
                    if (typeof mermaid !== 'undefined') {
                        mermaid.initialize({ 
                            startOnLoad: true,
                            theme: 'default',
                            securityLevel: 'loose'
                        });
                    } else {
                        setTimeout(initMermaid, 100);
                    }
                }
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', initMermaid);
                } else {
                    initMermaid();
                }
            })();
        `],

        // 自定义搜索框样式
        ['style', {}, `
            .search-box { width: 230px !important; min-width: 230px !important; max-width: 230px !important; }
            .search-box input { width: 100% !important; }
            @media (max-width: 768px) {
                .search-box { width: 200px !important; min-width: 200px !important; max-width: 200px !important; }
            }
        `],

        // Umami 统计分析 - 延迟加载，不阻塞页面渲染
        // 使用 requestIdleCallback 或 setTimeout 延迟加载
        ['script', {}, `
            (function() {
                function loadUmami() {
                    if (document.getElementById('umami-script')) return;
                    var script = document.createElement('script');
                    script.id = 'umami-script';
                    script.defer = true;
                    script.src = 'https://cloud.umami.is/script.js';
                    script.setAttribute('data-website-id', '5842114b-aed4-4e47-b3a6-777e091ef357');
                    document.head.appendChild(script);
                }
                // 页面加载完成后再加载
                if (document.readyState === 'complete') {
                    setTimeout(loadUmami, 2000);
                } else {
                    window.addEventListener('load', function() {
                        setTimeout(loadUmami, 2000);
                    });
                }
                // 如果浏览器支持 requestIdleCallback，使用它
                if (window.requestIdleCallback) {
                    window.requestIdleCallback(loadUmami, { timeout: 3000 });
                }
            })();
        `],
    ],

    theme: recoTheme({
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
            { text: '留言板', link: '/guestbook/', icon: 'IconMessageBoard' },
            { text: '关于', link: '/about/', icon: 'IconUser' },
        ],

        // 系列配置 - 禁用所有侧边栏
        series: {
            // Java后端
            '/tutorials/java-backend/java/': [],
            '/tutorials/java-backend/mysql/': [],
            '/tutorials/java-backend/redis/': [],
            '/tutorials/java-backend/maven/': [],
            '/tutorials/java-backend/mybatis/': [],
            '/tutorials/java-backend/mybatisPlus/': [],
            '/tutorials/java-backend/spring/': [],
            '/tutorials/java-backend/springboot/': [],
            '/tutorials/java-backend/springmvc/': [],
            '/tutorials/java-backend/springcloud/': [],
            '/tutorials/java-backend/elasticsearch/': [],
            '/tutorials/java-backend/rabbitmq/': [],
            '/tutorials/java-backend/jdbc/': [],
            '/tutorials/java-backend/servlet/': [],

            // Python人工智能
            '/tutorials/python-ai/python/': [],
            '/tutorials/python-ai/numpy/': [],
            '/tutorials/python-ai/pandas/': [],
            '/tutorials/python-ai/matplotlib/': [],
            '/tutorials/python-ai/scikitlearn/': [],
            '/tutorials/python-ai/tensorflow/': [],
            '/tutorials/python-ai/pytorch/': [],
            '/tutorials/python-ai/nlp/': [],
            '/tutorials/python-ai/cv/': [],

            // Java 转大模型开发
            '/tutorials/java-to-llm/01-prerequisites/': [],
            '/tutorials/java-to-llm/02-llm-fundamentals/': [],
            '/tutorials/java-to-llm/03-prompt-engineering/': [],
            '/tutorials/java-to-llm/04-api-integration/': [],
            '/tutorials/java-to-llm/05-spring-ai/': [],
            '/tutorials/java-to-llm/06-vector-databases/': [],
            '/tutorials/java-to-llm/07-rag-applications/': [],
            '/tutorials/java-to-llm/08-agent-development/': [],
            '/tutorials/java-to-llm/09-fine-tuning/': [],
            '/tutorials/java-to-llm/10-enterprise-practices/': [],
            '/tutorials/java-to-llm/11-projects/': [],

            // 计算机基础
            '/tutorials/computer-basics/network/': [],
            '/tutorials/computer-basics/operating-system/': [],
            '/tutorials/computer-basics/computer-organization/': [],
            '/tutorials/computer-basics/data-structures/': [],

            // 开发工具
            '/tutorials/development-tools/git/': [],

            // DevOps
            '/tutorials/devops-engineer/docker/': [],

            // HarmonyOS 开发
            '/tutorials/harmonyos-dev/': [],
            '/tutorials/harmonyos-dev/01-harmonyos-next-intro/': [],
            '/tutorials/harmonyos-dev/02-arkts-advanced/': [],
            '/tutorials/harmonyos-dev/03-arkui-next/': [],
            '/tutorials/harmonyos-dev/04-state-management-next/': [],
            '/tutorials/harmonyos-dev/05-ability-framework/': [],
            '/tutorials/harmonyos-dev/06-navigation-router/': [],
            '/tutorials/harmonyos-dev/07-data-management/': [],
            '/tutorials/harmonyos-dev/08-network-connect/': [],
            '/tutorials/harmonyos-dev/09-ai-native/': [],
            '/tutorials/harmonyos-dev/10-distributed-next/': [],
            '/tutorials/harmonyos-dev/11-graphics-animation/': [],
            '/tutorials/harmonyos-dev/12-multimedia-next/': [],
            '/tutorials/harmonyos-dev/13-service-card-next/': [],
            '/tutorials/harmonyos-dev/14-security-privacy/': [],
            '/tutorials/harmonyos-dev/15-performance-optimization/': [],
            '/tutorials/harmonyos-dev/16-testing-devops/': [],
            '/tutorials/harmonyos-dev/17-harmony-ecology/': [],

            // 数据库
            '/tutorials/database/mysql/': [],
            '/tutorials/database/redis/': []
        },

        // Algolia 搜索配置（已禁用，使用主题内置搜索）
        // algolia: {
        //     appId: 'MLKOH1MKDT',
        //     apiKey: '5af2979d2d290ce4e9247d7f89549455',
        //     indexName: '懿轩的博客_pages',
        //     // 可选：高级配置
        //     algoliaOptions: { 
        //         'facetFilters': ["lang:zh-CN"] 
        //     },
        //     debug: false // 调试时可设置为 true
        // },

        // 友情链接配置（已改用自定义组件 FriendshipLinks.vue）
        // 自定义组件支持分类显示，数据在组件内部维护

        // 评论配置（支持 Valine 或 Waline，可显示浏览量）
        // 方案一：使用 Valine（基于 LeanCloud，简单易用）
        // 1. 访问 https://console.leancloud.cn/ 注册并登录
        // 2. 创建应用，获取 App ID 和 App Key
        // 3. 在应用设置中配置 Web 安全域名
        // 4. 取消下面的注释并填写你的 App ID 和 App Key
        // commentConfig: {
        //   type: 'valine',
        //   options: {
        //     appId: 'your-app-id', // 替换为你的 LeanCloud App ID
        //     appKey: 'your-app-key', // 替换为你的 LeanCloud App Key
        //     placeholder: '请输入评论...',
        //     visitor: true, // 启用浏览量统计（重要！）
        //     recordIP: false, // 是否记录评论者IP
        //   },
        // },
        
        // 方案二：使用 Waline（推荐，功能更强大，支持浏览量统计）
        // 使用子域名 waline.yixuan.cyou 独立部署，无需代理
        // 在生产环境（Vercel）使用子域名，开发环境使用原始服务
        commentConfig: {
          type: 'waline',
          options: {
            serverURL: process.env.VERCEL 
              ? 'https://waline.yixuan.cyou'  // Vercel 生产环境使用子域名
              : 'https://waline.yixuan.cyou', // 开发环境使用原始Waline服务
            visitor: true, // 启用浏览量统计（VuePress Reco 主题会自动在文章页面显示）
            dark: 'auto', // 自动切换暗色模式
            // 不强制登录，允许匿名评论
            // login: 'force', // 已移除强制登录
            // 表情配置（可选，需要服务端支持）
            // emoji: [
            //   'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
            //   'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
            // ],
            // 图片上传（可选，需要服务端配置）
            // imageUploader: true,
            // 代码高亮（可选）
            // highlighter: true,
            // 数学公式支持（可选）
            // mathTagSupport: true,
            locale: {
              placeholder: '请输入留言，填写邮箱可收到回复哦！...',
              website: '网址(http://)',
            },
          },
        },

        // 主题多语言配置：自定义右上角语言切换显示文本
        locales: {
          '/': {
            // 语言下拉菜单中显示的名称
            selectLanguageName: '简体中文',
          },
          '/en/': {
            selectLanguageName: 'English',
          },
        },
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


