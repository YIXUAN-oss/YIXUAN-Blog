# 懿轩的个人博客 | YiXuan's Blog

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![VuePress](https://img.shields.io/badge/VuePress-2.x-green.svg)
![Theme](https://img.shields.io/badge/theme-vuepress--reco-brightgreen.svg)

## ✨ 特性

- 🎨 **美观主题** - 支持卡片式布局、动画过渡、响应式设计
- 🌐 **多语言支持** - 中文 / 英文 自动切换（可扩展更多语言）
- 🔍 **全局搜索** - 内置搜索，支持关键词高亮
- 🌙 **暗黑模式** - 自动跟随系统，支持手动切换
- 📱 **移动友好** - 完美适配手机、平板、桌面
- 📈 **SEO 优化** - 自动生成 sitemap、meta 标签、RSS 支持
- 🖼️ **图片懒加载** - 提升加载速度
- 📊 **统计分析** - 可选集成Umami（自托管）
- 🧩 **插件丰富** - 代码复制、阅读进度、页面滚动效果等

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:8080` 查看效果

### 构建部署

```bash
npm run build
```

生成的静态文件在 `docs/.vuepress/dist` 目录

## 📂 项目结构

```
YiXuan-Blog/
├── docs/
│   ├── .vuepress/
│   │   ├── config.ts          # VuePress 配置文件
│   │   ├── public/            # 静态资源
│   │   └── styles/            # 自定义样式
│   ├── en/                    # 英文内容
│   ├── zh/                    # 中文内容
│   ├── tutorials/             # 教程中心
│   ├── articles/              # 技术文章
│   ├── resources/             # 资源分享
│   ├── diary/                 # 日常随笔
│   ├── about/                 # 关于页面
│   └── README.md              # 首页
├── package.json
└── README.md
```

## 📝 内容管理

### 添加文章

在对应目录下创建 Markdown 文件，例如：

```markdown
---
title: 文章标题
date: 2025-01-01
categories:
  - 分类
tags:
  - 标签1
  - 标签2
---

文章内容...
```

### 添加教程

在 `docs/tutorials/` 目录下创建对应的教程分类文件夹。

## 🌐 部署

### GitHub Pages

1. 修改 `docs/.vuepress/config.ts` 中的 `base` 配置
2. 执行 `npm run build`
3. 将 `docs/.vuepress/dist` 目录推送到 `gh-pages` 分支

### Vercel

1. 导入 GitHub 仓库
2. 构建命令：`npm run build`
3. 输出目录：`docs/.vuepress/dist`

## 👤 作者

**懿轩 (YiXuan)**

- 📧 Email: byyi.xuan@outlook.com
- 🐙 GitHub: [@YIXUAN-oss](https://github.com/YIXUAN-oss)

## 📄 许可证

[MIT](LICENSE) © 懿轩


