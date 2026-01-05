# Waline 评论系统配置说明

本文档说明如何在 Vercel 上配置 Waline 评论服务，支持两种方案：
1. **方案A**：使用 Serverless Function 代理（同一域名）
2. **方案B**：使用子域名独立部署（推荐，已配置）

## 📋 方案概述

### 方案A：代理方案

通过 Vercel Serverless Function 作为代理，将博客域名下的 `/api/waline/*` 请求转发到独立的 Waline 服务。

### 架构说明

```
用户请求: www.yixuan.cyou/api/waline/*
    ↓
Vercel Serverless Function (api/waline/[...path].js)
    ↓
Waline 服务: waline-server-eight-psi.vercel.app/*
```

### 方案B：子域名方案（推荐）

直接使用子域名 `waline.yixuan.cyou` 访问 Waline 服务，无需代理转发。

```
用户请求: waline.yixuan.cyou/*
    ↓
Waline 服务: waline-server-eight-psi.vercel.app/*
```

## 🔧 方案A：代理方案配置步骤

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

## 🔄 方案选择

当前项目支持两种方案，可以根据需求选择：

1. **方案A：使用代理**（通过 `/api/waline` 路径）
2. **方案B：使用子域名**（`waline.yixuan.cyou`）⭐ **已配置，推荐**

以下详细说明两种方案的配置：

### 方案A：在 Waline 项目中添加博客域名（不推荐）

1. 进入 Waline 的 Vercel 项目
2. 在 Settings > Domains 中添加 `www.yixuan.cyou`
3. 配置路由规则（需要 Vercel Team Plan）

**缺点**：需要 Team Plan，且两个项目不能同时绑定同一域名

### 方案B：使用子域名（推荐，已配置）

使用子域名 `waline.yixuan.cyou` 独立部署 Waline 服务，无需代理，配置更简单。

#### 优点
- 简单直接，无需代理
- 性能更好，减少一次请求转发
- 配置清晰，域名独立管理

#### 配置步骤

##### 1. 在 Vercel 中为 Waline 项目添加子域名

1. 登录 Vercel，进入你的 Waline 项目（例如：`waline-server-eight-psi`）
2. 点击左侧菜单 **Settings** → **Domains**
3. 点击 **Add Domain** 按钮
4. 输入子域名：`waline.yixuan.cyou`
5. 点击 **Add** 确认
6. Vercel 会显示需要添加的 DNS 记录信息，包括：
   - **Type**: CNAME
   - **Name**: waline
   - **Value**: `e4d7dad101da6c4f.vercel-dns-017.com`（具体值以 Vercel 显示的为准）

##### 2. 在域名提供商处添加 CNAME 记录

**如果使用 Cloudflare（推荐）**：

1. 登录 Cloudflare 控制台，选择域名 `yixuan.cyou`
2. 点击左侧菜单 **DNS** → **Records**
3. 点击 **Add record** 按钮
4. 填写 DNS 记录：
   - **Type**: 选择 `CNAME`
   - **Name**: 输入 `waline`（只需要子域名部分，不需要完整域名）
   - **Target**: 输入 Vercel 提供的值，例如 `e4d7dad101da6c4f.vercel-dns-017.com`（注意：Cloudflare 通常会自动添加末尾的点号，如果没有可以手动添加）
   - **Proxy status**: 点击橙色云朵图标，使其变为灰色（**DNS only**），**重要：必须关闭代理**
   - **TTL**: 选择 `Auto`（或 3600）
5. 点击 **Save** 保存

**如果使用 NameSilo 或其他 DNS 提供商**：

1. 登录域名管理控制台
2. 找到 DNS 管理/域名解析页面
3. 添加新的 CNAME 记录：
   - **主机记录（Name/Host）**: `waline`
   - **记录类型**: `CNAME`
   - **记录值（Value/Target）**: `e4d7dad101da6c4f.vercel-dns-017.com.`（末尾的点号如果系统不支持可以不加）
   - **TTL**: 默认或 3600
4. 保存记录

##### 3. 等待 DNS 生效

- DNS 记录通常需要 **1-10 分钟** 生效
- 最长可能需要 **24-48 小时**（通常不需要这么长时间）
- 可以使用在线工具检查 DNS 是否生效，例如访问 `https://dnschecker.org/` 查询 `waline.yixuan.cyou` 的 CNAME 记录

##### 4. 验证 Vercel 域名配置

1. 回到 Vercel 的域名配置页面
2. 点击 **Refresh** 按钮
3. 等待几分钟后再次刷新
4. 状态应从 **"Invalid Configuration"** 变为 **"Valid Configuration"**

##### 5. 更新博客配置

在 `docs/.vuepress/config.ts` 中更新 Waline 的 `serverURL` 配置：

```typescript
commentConfig: {
  type: 'waline',
  options: {
    serverURL: process.env.VERCEL 
      ? 'https://waline.yixuan.cyou'  // 生产环境使用子域名
      : 'https://waline-server-eight-psi.vercel.app', // 开发环境使用原始Waline服务
    visitor: true, // 启用浏览量统计（重要！）
    dark: 'auto', // 自动切换暗色模式
    locale: {
      placeholder: '请输入评论...',
    },
  },
},
```

##### 6. 验证配置

配置完成后，进行以下验证：

1. **直接访问子域名**：访问 `https://waline.yixuan.cyou`，应该能看到 Waline 的响应
2. **检查博客评论**：访问博客页面，检查评论是否正常加载
3. **浏览器开发者工具**：打开浏览器开发者工具（F12），在 Network 标签中确认请求指向 `waline.yixuan.cyou`

#### 注意事项

⚠️ **重要**：
- **Proxy 状态必须关闭**：在 Cloudflare 中配置 CNAME 记录时，必须确保 Proxy status 为 "DNS only"（灰色云朵），不要开启 Cloudflare 代理，否则 Vercel 无法正确验证域名所有权
- **Name 字段**：只需要填写 `waline`，不需要填写完整的 `waline.yixuan.cyou`
- **DNS 生效时间**：添加 DNS 记录后需要等待几分钟到几小时才能生效，请耐心等待

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

### 问题4：子域名 DNS 配置无效

**原因**：DNS 记录配置错误或未生效

**解决**：
1. 检查 Cloudflare/NameSilo 中的 CNAME 记录是否正确
2. 确认 Proxy 状态已关闭（DNS only）
3. 等待 DNS 传播（可能需要几分钟到几小时）
4. 使用在线 DNS 检查工具验证记录是否生效
5. 在 Vercel 页面点击 Refresh 刷新状态

### 问题5：子域名无法访问 Waline

**原因**：配置文件未更新或 DNS 未生效

**解决**：
1. 确认 DNS 记录已正确配置并生效
2. 检查 `config.ts` 中的 `serverURL` 是否指向正确的子域名
3. 直接访问 `https://waline.yixuan.cyou` 测试服务是否正常
4. 检查浏览器控制台是否有错误信息

## 📝 更新日志

- 2025-01-05: 添加方案B（子域名配置）的详细操作步骤，包括 Vercel 和 Cloudflare DNS 配置说明
- 2025-01-04: 初始版本，添加 Serverless Function 代理配置

