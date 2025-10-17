# Algolia DocSearch 配置快速指南

## 🎯 目标
实现图片中显示的 Algolia 搜索界面效果

## ✅ 已完成的工作

1. ✅ 安装了 `@vuepress/plugin-docsearch` 插件
2. ✅ 配置了 DocSearch 插件和中文界面
3. ✅ 更新了 `package.json` 和 `config.ts`

## ⚠️ 需要你完成的步骤

### 第一步：申请 Algolia DocSearch（推荐方案）

1. **访问申请页面**  
   👉 [https://docsearch.algolia.com/apply/](https://docsearch.algolia.com/apply/)

2. **填写申请表单**
   ```
   Website URL: https://your-blog-url.vercel.app （你的博客网址）
   Email: byyi.xuan@outlook.com （你的邮箱）
   ```
   
   注意：
   - ✅ 网站必须已经部署并可以公开访问
   - ✅ 需要说明这是技术文档或博客
   - ✅ 需要确认你是网站所有者

3. **等待审核**
   - 通常 1-2 周会收到回复
   - 通过后会收到包含配置信息的邮件

### 第二步：填写配置信息

收到 Algolia 发来的邮件后：

1. 打开 `docs/.vuepress/config.ts` 文件
2. 找到第 136-138 行，替换这三个值：

```typescript
docsearchPlugin({
    appId: 'YOUR_APP_ID',        // ← 替换为邮件中的 appId
    apiKey: 'YOUR_API_KEY',      // ← 替换为邮件中的 apiKey
    indexName: 'YOUR_INDEX_NAME' // ← 替换为邮件中的 indexName
    // ... 其他配置不用改
})
```

### 第三步：测试

```bash
# 1. 安装依赖（如果还没装）
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器，点击搜索图标测试
```

---

## 🔄 临时方案（在等待审核期间）

如果你想先测试一下效果，可以暂时移除 DocSearch 配置，使用主题内置搜索：

**方式 1：注释掉 plugins 配置**

在 `config.ts` 中，将 `plugins` 部分注释掉：

```typescript
// plugins: [
//     docsearchPlugin({
//         ...
//     })
// ],
```

这样会使用主题自带的搜索功能（虽然没有 Algolia 那么强大，但也能用）。

---

## 📝 其他选项

### 选项 2：使用 Algolia 普通账户

如果 DocSearch 申请被拒绝，可以：

1. 在 [https://www.algolia.com/](https://www.algolia.com/) 注册免费账户
2. 创建 Application 和 Index
3. 获取 API Keys 并填写到配置中
4. 需要自己配置爬虫（比较复杂）

详细步骤见：`docs/.vuepress/搜索功能说明.md`

---

## 🆘 常见问题

### Q1: 现在能用搜索功能吗？
A: 能，但使用的是主题内置搜索。要使用 Algolia 搜索界面，需要先获取配置信息。

### Q2: DocSearch 申请需要什么条件？
A: 
- 网站必须公开可访问
- 内容是技术文档、博客或开源项目文档
- 你是网站所有者

### Q3: 不想申请 Algolia 可以吗？
A: 可以，主题内置搜索对小型博客来说已经够用了。

### Q4: 申请被拒怎么办？
A: 可以使用 Algolia 普通账户（免费版），但需要自己配置爬虫。

---

## 📚 详细文档

更详细的说明请查看：`docs/.vuepress/搜索功能说明.md`

---

## ✨ 预期效果

配置完成后，你将获得：
- ✅ 美观的搜索界面（如截图所示）
- ✅ 快速的搜索响应
- ✅ 搜索历史记录
- ✅ 中文界面提示
- ✅ 支持键盘快捷键导航
