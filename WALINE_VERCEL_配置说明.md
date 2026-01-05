# Vercel 同一域名管理 Waline 配置说明

本文档说明如何在 Vercel 上使用同一域名（`www.yixuan.cyou`）同时管理博客和 Waline 评论服务。

## 📋 方案概述

通过 Vercel Serverless Function 作为代理，将博客域名下的 `/api/waline/*` 请求转发到独立的 Waline 服务。

### 架构说明

```
用户请求: www.yixuan.cyou/api/waline/*
    ↓
Vercel Serverless Function (api/waline/[...path].js)
    ↓
Waline 服务: waline-server-eight-psi.vercel.app/*
```

## 🔧 配置步骤

### 1. 创建 Serverless Function 代理

已在项目中创建 `api/waline/[...path].js` 文件，该函数会：
- 接收 `/api/waline/*` 路径的请求
- 将请求转发到 Waline 服务
- 返回响应给客户端

### 2. 配置 Waline ServerURL

在 `docs/.vuepress/config.ts` 中，Waline 的 `serverURL` 配置为：

```typescript
serverURL: typeof window !== 'undefined' && window.location.hostname === 'www.yixuan.cyou'
  ? 'https://www.yixuan.cyou/api/waline'  // 生产环境使用同一域名
  : 'https://waline-server-eight-psi.vercel.app', // 开发环境使用原始Waline服务
```

### 3. Vercel 部署配置

`vercel.json` 已配置好，无需额外修改。Serverless Functions 会自动处理 `/api/*` 路径。

## 🚀 部署流程

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "添加 Waline 代理配置"
   git push
   ```

2. **Vercel 自动部署**
   - Vercel 会自动检测代码更改
   - 自动构建并部署 Serverless Function
   - 函数路径：`/api/waline/*`

3. **验证部署**
   - 访问 `https://www.yixuan.cyou/api/waline`
   - 应该能看到 Waline 的响应（或错误页面，这表示代理已工作）

## 🔍 测试验证

### 方法1：浏览器测试

1. 访问博客页面：`https://www.yixuan.cyou`
2. 打开浏览器开发者工具（F12）
3. 查看 Network 标签
4. 检查 Waline 相关请求是否指向 `/api/waline`

### 方法2：直接测试 API

```bash
# 测试代理是否工作
curl https://www.yixuan.cyou/api/waline
```

## ⚠️ 注意事项

1. **环境变量**
   - 代理函数使用的 Waline 服务地址硬编码在 `api/waline/[...path].js` 中
   - 如需修改，编辑 `WALINE_SERVER` 常量

2. **CORS 配置**
   - 代理函数已设置 CORS 头，允许跨域请求
   - 如遇到 CORS 问题，检查函数代码

3. **性能考虑**
   - Serverless Function 会增加一次请求延迟
   - 通常影响很小（<100ms）

4. **开发环境**
   - 本地开发时，Waline 会直接连接到原始服务
   - 避免本地环境需要配置域名的问题

## 🔄 替代方案

如果不想使用代理，也可以考虑以下方案：

### 方案A：在 Waline 项目中添加博客域名

1. 进入 Waline 的 Vercel 项目
2. 在 Settings > Domains 中添加 `www.yixuan.cyou`
3. 配置路由规则（需要 Vercel Team Plan）

**缺点**：需要 Team Plan，且两个项目不能同时绑定同一域名

### 方案B：使用子域名

1. 将 Waline 部署到 `waline.yixuan.cyou`
2. 在博客配置中使用该子域名

**优点**：简单直接
**缺点**：需要使用子域名

## 📚 相关文档

- [Vercel Serverless Functions 文档](https://vercel.com/docs/functions)
- [Waline 官方文档](https://waline.js.org/)
- [VuePress Reco 主题文档](https://vuepress-theme-reco.recoluan.com/)

## 🐛 故障排查

### 问题1：代理返回 500 错误

**原因**：Serverless Function 执行出错

**解决**：
1. 查看 Vercel 项目的 Functions 日志
2. 检查 `api/waline/[...path].js` 代码
3. 确认 Waline 服务地址正确

### 问题2：评论无法加载

**原因**：Waline serverURL 配置错误

**解决**：
1. 检查浏览器控制台错误信息
2. 确认 `config.ts` 中的 `serverURL` 配置正确
3. 验证代理函数是否正常工作

### 问题3：CORS 错误

**原因**：跨域请求被阻止

**解决**：
1. 检查代理函数的 CORS 头设置
2. 确认 `Access-Control-Allow-Origin` 已设置

## 📝 更新日志

- 2025-01-04: 初始版本，添加 Serverless Function 代理配置

